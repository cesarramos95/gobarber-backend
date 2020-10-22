interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      // 'gobarber@cesarramos.dev'
      email: 'cesarramos.aug@gmail.com',
      name: 'César Augusto',
    },
  },
} as IMailConfig;
