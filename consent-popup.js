// Mining Consent Popup Script
(function() {
    'use strict';

    // Check if consent has been given
    function checkConsent() {
        const consentGiven = localStorage.getItem('miningConsentGiven');
        return consentGiven === 'true';
    }

    // Show consent popup
    function showConsentPopup() {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'consentOverlay';
        overlay.className = 'consent-overlay';
        overlay.innerHTML = `
            <div class="consent-popup">
                <div class="consent-header">
                    <h2>
                        <span>⚠️</span>
                        Mining Consent Required
                    </h2>
                    <p>Please read and accept the following before you can start mining</p>
                </div>

                <div class="consent-content">
                    <div class="warning-box">
                        <div class="warning-icon">⚡</div>
                        <div class="warning-text">
                            Mining cryptocurrency will use your computer's CPU resources, which may increase power consumption, heat generation, and potentially affect your device's performance.
                        </div>
                    </div>

                    <div class="consent-section">
                        <h3>By clicking "I Accept", you understand and agree to the following:</h3>
                        <ul class="consent-list">
                            <li>Mining will use your computer's CPU resources</li>
                            <li>This may increase your device's power consumption and heat generation</li>
                            <li>You can stop mining at any time by clicking the "Stop Mining" button</li>
                            <li>You can adjust the CPU usage percentage to control resource consumption</li>
                            <li>All mining rewards will be sent to the wallet address you provide</li>
                            <li>You have read and agree to our Privacy Policy below</li>
                        </ul>
                    </div>

                    <div class="privacy-section">
                        <h4>🔒 Privacy Policy</h4>
                        
                        <h4>1. Introduction</h4>
                        <p>Welcome to Monero Web Miner. We are committed to protecting your privacy and ensuring transparency in how we operate. This Privacy Policy explains how we collect, use, and protect your information when you use our web-based Monero mining application.</p>

                        <h4>2. Data Collection</h4>
                        <p>We collect and store the following information locally in your browser:</p>
                        <ul>
                            <li>Your Monero wallet address (stored locally in your browser)</li>
                            <li>Your selected mining pool preference</li>
                            <li>Your CPU usage settings</li>
                            <li>Your language preference</li>
                            <li>Your theme preference (dark/light mode)</li>
                        </ul>
                        <p>All of this data is stored locally in your browser using localStorage and is never transmitted to our servers.</p>

                        <h4>3. Cryptocurrency Mining</h4>
                        <p>This application allows you to mine Monero (XMR) cryptocurrency directly in your browser. Important information about mining:</p>
                        <ul>
                            <li>Mining only occurs with your explicit consent and active participation</li>
                            <li>Mining uses your computer's CPU resources, which may increase power consumption and heat generation</li>
                            <li>You have full control over when mining starts and stops</li>
                            <li>You can adjust the CPU usage percentage to balance performance and usability</li>
                            <li>All mining rewards go directly to the wallet address you provide</li>
                        </ul>

                        <h4>4. Third-Party Services</h4>
                        <p>We use the following third-party services:</p>
                        <ul>
                            <li>Mining pools to facilitate cryptocurrency mining</li>
                            <li>CoinGecko API for displaying current Monero price information</li>
                            <li>News aggregation services for displaying Monero-related news</li>
                        </ul>

                        <h4>5. Data Security</h4>
                        <p>Your data security is important to us. All data is stored locally in your browser and is not transmitted to external servers. You maintain full control over your data and can clear it at any time through your browser settings.</p>

                        <h4>6. Your Rights</h4>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your locally stored data</li>
                            <li>Delete your locally stored data at any time</li>
                            <li>Revoke your mining consent at any time</li>
                            <li>Stop using the application at any time</li>
                        </ul>

                        <h4>7. Changes to This Policy</h4>
                        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

                        <h4>8. Contact</h4>
                        <p>If you have any questions about this Privacy Policy, please contact us through our GitHub repository.</p>
                    </div>

                    <p style="color: #64748b; font-size: 13px; margin-top: 16px; font-style: italic;">
                        You can revoke your consent at any time in the Settings tab.
                    </p>
                </div>

                <div class="consent-buttons">
                    <button class="btn btn-accept" id="acceptBtn">I Accept</button>
                    <button class="btn btn-decline" id="declineBtn">I Decline</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // Add event listeners
        document.getElementById('acceptBtn').addEventListener('click', function() {
            localStorage.setItem('miningConsentGiven', 'true');
            localStorage.setItem('miningConsentDate', new Date().toISOString());
            overlay.remove();
        });

        document.getElementById('declineBtn').addEventListener('click', function() {
            localStorage.setItem('miningConsentGiven', 'false');
            alert('You have declined the mining consent. The application requires your consent to function. You can change your decision by refreshing the page.');
        });
    }

    // Initialize on page load
    window.addEventListener('DOMContentLoaded', function() {
        if (!checkConsent()) {
            showConsentPopup();
        }
    });
})();

