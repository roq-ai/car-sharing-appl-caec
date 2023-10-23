interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own bookings', 'Read car information', 'Create reviews', 'Read reviews'],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage car information',
    'Manage bookings',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/39e313fb-8d24-4407-88f4-42864ca64b6b',
};
