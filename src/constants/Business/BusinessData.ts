// businessData.ts

export interface BusinessData {
  success: boolean;
  data: {
    business_name: string;
    business_tag: string | null;
    business_url: string;
    business_description: string;
    business_address: string;
    business_category: string;
    business_category_name: string;
    business_country_id: number;
    business_country: string;
    business_state_id: number;
    business_state_name: string;
    business_logo: string;
    business_website: string | null;
    business_link: string;
    is_verified_priceplan: boolean;
    currency: string;
    business_email: string;
    business_phone: string;
    account_details: {
      name: string | null;
      bank: string | null;
      number: string | null;
    };
  };
  message: string;
}
