'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log the data to the console.
  console.log('New contact form submission:');
  console.log(values);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // You can throw an error here to test the error state
  // throw new Error('Failed to send message.');

  return {
    success: true,
    message: 'Message sent successfully!',
  };
}
