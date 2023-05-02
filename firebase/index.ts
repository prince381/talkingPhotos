import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { config } from '../config';

const serviceAccount = {
    type: 'service_account',
    project_id: config.PROJECT_ID,
    private_key_id: config.PRIVATE_KEY_ID,
    private_key: config.PRIVATE_KEY.replace(/\\n/gm, "\n"),
    client_email: config.CLIENT_EMAIL,
    client_id: config.CLIENT_ID,
    auth_uri: config.AUTH_URI,
    token_uri: config.TOKEN_URI,
    auth_provider_x509_cert_url: config.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: config.CLIENT_X509_CERT_URL
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  storageBucket: "all-in-pod.appspot.com"
});

export const db = admin.firestore();
export const storage = admin.storage();