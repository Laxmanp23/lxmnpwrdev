const { PrismaClient } = require('@prisma/client');
const bcryptjs = require('bcryptjs');

const prisma = new PrismaClient();

async function debug() {
  try {
    console.log('Checking admin user in database...\n');

    // Find the admin user
    const user = await prisma.user.findUnique({
      where: { email: 'admin@laxmanpawar.dev' },
    });

    if (!user) {
      console.error('❌ Admin user NOT found in database');
      return;
    }

    console.log('✓ Admin user found:');
    console.log(`  Email: ${user.email}`);
    console.log(`  Name: ${user.name}`);
    console.log(`  Password Hash: ${user.password}\n`);

    // Test password verification
    const testPassword = 'Admin@123';
    const isValid = await bcryptjs.compare(testPassword, user.password);
    
    console.log(`Testing password verification:`);
    console.log(`  Test Password: ${testPassword}`);
    console.log(`  Match Result: ${isValid ? '✓ VALID' : '❌ INVALID'}\n`);

    if (isValid) {
      console.log('✨ Login credentials are correct!');
      console.log('   Email: admin@laxmanpawar.dev');
      console.log('   Password: Admin@123');
    } else {
      console.log('❌ Password verification failed. Database might have an issue.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

debug();
