# Monero Web Miner - Dokumentation

## Übersicht

Der **Monero Web Miner** ist eine moderne, professionelle Web-Anwendung, die es Benutzern ermöglicht, Monero (XMR) direkt in ihrem Browser zu minen. Die Anwendung wurde mit React entwickelt und bietet eine benutzerfreundliche Oberfläche mit vollem Dark/Light Mode Support und mehrsprachiger Unterstützung.

## 🌟 Hauptfunktionen

### ✅ Wallet-Konfiguration
- Eingabe und Validierung der Monero-Wallet-Adresse
- Automatische Speicherung der Wallet-Adresse im Browser (localStorage)
- Validierung des Monero-Adressformats

### ✅ Mining Pool Auswahl
Die Anwendung unterstützt **8 beliebte Monero Mining Pools**:

1. **MoneroOcean** - Auto-switching Pool mit Zahlungen in Monero (0% Gebühr)
2. **SupportXMR** - Zuverlässiger und stabiler Pool (0.6% Gebühr)
3. **XMRPool.eu** - Schneller und stabiler PPLNS Pool (0.6% Gebühr)
4. **Nanopool** - Großer Mining Pool mit globalen Servern (1% Gebühr)
5. **MineXMR** - Einer der größten Monero Pools (1% Gebühr)
6. **HashVault** - Professioneller Mining Pool (0.9% Gebühr)
7. **C3Pool** - Niedriger Gebühren-Pool (0.5% Gebühr)
8. **P2Pool** - Dezentralisierter Monero Mining Pool (0% Gebühr)

Für jeden Pool werden angezeigt:
- Pool-Gebühr
- Minimale Auszahlung
- Beschreibung

### ✅ Mining-Modi
- **Pool Mining** (empfohlen): Mining in einem Pool für konsistente Belohnungen
- **Solo Mining**: Direktes Mining im Monero-Netzwerk (mit Warnung für Benutzer mit geringer Hashrate)

### ✅ CPU-Auslastungssteuerung
- Einstellbarer Slider von 10% bis 100%
- Ermöglicht Balance zwischen Mining-Performance und Geräte-Nutzbarkeit
- Echtzeit-Anpassung der Mining-Leistung

### ✅ Echtzeit-Statistiken
Die Anwendung zeigt folgende Mining-Statistiken in Echtzeit an:
- **Status**: Idle / Mining läuft / Verbinden
- **Hashrate**: Aktuelle Hashrate in H/s (Hashes pro Sekunde)
- **Akzeptierte Shares**: Anzahl der vom Pool akzeptierten Shares
- **Abgelehnte Shares**: Anzahl der abgelehnten Shares

### ✅ Live Monero Preis & Chart
- **Aktueller Preis**: Anzeige des aktuellen Monero-Preises in USD, EUR und BTC.
- **24h Änderung**: Prozentuale Preisänderung der letzten 24 Stunden mit visueller Indikation (grün/rot, Auf-/Abwärtspfeil).
- **Interaktiver Chart**: Ein Liniendiagramm, das den simulierten Preisverlauf der letzten 24 Stunden anzeigt.
- **Ranking**: Anzeige des aktuellen Monero-Rankings nach Marktkapitalisierung.

### ✅ Design und Benutzeroberfläche
- **Monero-Branding**: Professionelles Orange-Farbschema (#FF6600)
- **Dark Mode**: Standardmäßig aktiviert mit dunklem Hintergrund
- **Light Mode**: Heller Modus für Benutzer, die ihn bevorzugen
- **Responsive Design**: Optimiert für Desktop und mobile Geräte
- **Moderne UI-Komponenten**: Verwendet shadcn/ui für professionelle Komponenten
- **Smooth Transitions**: Animationen und Hover-Effekte für bessere UX

### ✅ Mehrsprachigkeit
- **Automatische Spracherkennung**: Erkennt die Browser-Sprache automatisch
- **Unterstützte Sprachen**:
  - 🇩🇪 Deutsch
  - 🇬🇧 English
- **Manuelle Sprachwahl**: Benutzer können die Sprache in den Einstellungen ändern

## 🛠️ Technische Details

### Technologie-Stack
- **Frontend-Framework**: React 18
- **Build-Tool**: Vite
- **Styling**: Tailwind CSS
- **UI-Komponenten**: shadcn/ui
- **Icons**: Lucide React
- **Charting Library**: Recharts
- **Mining-Engine**: Simulierter Worker (Platzhalter für WebAssembly-Integration)
- **Preis-API**: CoinGecko API (für Live-Preisdaten)

### Mining-Implementierung

**Wichtiger Hinweis**: Die aktuelle Version verwendet einen **simulierten Mining-Worker** zu Demonstrationszwecken. Für echtes Mining müsste die Anwendung mit einer WebAssembly-basierten Mining-Bibliothek wie `xmr-wasm` integriert werden.

#### Für echtes Mining erforderlich:
1. **WebAssembly Miner**: Integration von `xmr-wasm` oder ähnlicher Bibliothek
2. **WebSocket Proxy**: Ein Server-seitiger Proxy (z.B. `xmr-node-proxy`) für die Verbindung zu Mining-Pools
3. **Pool-Konfiguration**: Korrekte Stratum-Protokoll-Implementierung

### Projektstruktur

```
monero-miner/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/          # shadcn/ui Komponenten
│   │   └── MoneroPrice.jsx # Monero Preis Komponente
│   ├── App.jsx          # Haupt-Anwendungskomponente
│   ├── App.css          # Monero-Themed Styles
│   ├── translations.js  # Mehrsprachige Übersetzungen
│   ├── miningPools.js   # Mining Pool Konfigurationen
│   ├── miningWorker.js  # Mining Worker (simuliert)
│   └── main.jsx         # Einstiegspunkt
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Installation und Entwicklung

### Voraussetzungen
- Node.js 18+
- pnpm (oder npm/yarn)

### Lokale Entwicklung

```bash
# Repository klonen
cd monero-miner

# Abhängigkeiten installieren
pnpm install

# Entwicklungsserver starten
pnpm run dev

# Öffnen Sie http://localhost:5173 im Browser
```

### Produktion Build

```bash
# Build für Produktion erstellen
pnpm run build

# Build-Dateien befinden sich in dist/
```

## 🌐 Deployment

### GitHub Pages
Die Anwendung ist auf GitHub Pages verfügbar:
**https://minemoneronetwork.github.io/**

### Eigenes Deployment
Die Anwendung kann auf jedem statischen Hosting-Service deployed werden:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

Einfach den Inhalt des `dist/` Ordners hochladen.

## 📋 Verwendung

### Schritt-für-Schritt Anleitung

1. **Wallet-Adresse eingeben**
   - Geben Sie Ihre Monero-Wallet-Adresse in das Eingabefeld ein
   - Die Adresse wird automatisch validiert

2. **Mining Pool auswählen**
   - Wählen Sie einen Mining Pool aus der Dropdown-Liste
   - Vergleichen Sie Gebühren und minimale Auszahlungen

3. **Mining-Modus wählen**
   - **Pool Mining** (empfohlen für die meisten Benutzer)
   - **Solo Mining** (nur für Benutzer mit hoher Hashrate)

4. **CPU-Auslastung einstellen**
   - Verwenden Sie den Slider, um die CPU-Auslastung anzupassen
   - Empfohlen: 50-70% für Balance zwischen Mining und Nutzbarkeit

5. **Mining starten**
   - Klicken Sie auf "Mining starten"
   - Überwachen Sie die Statistiken in Echtzeit

6. **Mining stoppen**
   - Klicken Sie auf "Mining stoppen", um das Mining zu beenden

## ⚠️ Wichtige Hinweise

### Disclaimer
- **CPU-Ressourcen**: Web-Mining kann erhebliche CPU-Ressourcen verbrauchen
- **Akkuleistung**: Auf mobilen Geräten kann Mining die Akkuleistung stark beanspruchen
- **Rentabilität**: Browser-basiertes Mining ist im Allgemeinen weniger profitabel als dedizierte Mining-Software
- **Benutzerzustimmung**: Stellen Sie immer sicher, dass Benutzer dem Mining zustimmen

### Sicherheit
- Die Anwendung speichert keine sensiblen Daten auf externen Servern
- Wallet-Adressen werden nur lokal im Browser gespeichert (localStorage)
- Keine Passwörter oder Private Keys erforderlich

## 🔧 Anpassung und Erweiterung

### Weitere Mining Pools hinzufügen
Bearbeiten Sie `src/miningPools.js`:

```javascript
{
  id: 'neuer-pool',
  name: 'Neuer Pool',
  url: 'pool.example.com',
  port: 3333,
  fee: '1%',
  minPayout: '0.1 XMR',
  description: 'Beschreibung des Pools',
}
```

### Weitere Sprachen hinzufügen
Bearbeiten Sie `src/translations.js`:

```javascript
export const translations = {
  // ... bestehende Sprachen
  fr: {
    title: "Monero Web Miner",
    // ... weitere Übersetzungen
  },
};
```

### Echtes Mining integrieren

Um echtes Mining zu aktivieren, müssen Sie:

1. **xmr-wasm kompilieren**:
```bash
git clone https://github.com/jtgrassie/xmr-wasm
cd xmr-wasm
# Folgen Sie den Kompilierungsanweisungen
```

2. **WebSocket Proxy einrichten**:
```bash
git clone https://github.com/jtgrassie/xmr-node-proxy
cd xmr-node-proxy
# Konfigurieren und starten Sie den Proxy
```

3. **Mining Worker ersetzen**:
   - Ersetzen Sie `src/miningWorker.js` mit echter xmr-wasm Integration
   - Implementieren Sie WebSocket-Verbindung zum Proxy

## 📄 Lizenz

Dieses Projekt ist Open Source. Die verwendeten Bibliotheken und Frameworks haben ihre eigenen Lizenzen.

## 🤝 Beitragen

Beiträge sind willkommen! Mögliche Verbesserungen:
- Integration von echtem WebAssembly Mining
- Weitere Mining Pools hinzufügen
- Weitere Sprachen unterstützen
- Performance-Optimierungen
- Erweiterte Statistiken und Grafiken

## 📞 Support

Für Fragen oder Probleme:
- GitHub Issues: https://github.com/MineMoneroNetwork/mmn.github.io/issues
- Monero Community: https://www.reddit.com/r/Monero/

## 🎉 Danksagungen

- **Monero Project**: Für die großartige Kryptowährung
- **xmr-wasm**: Für die WebAssembly Mining-Implementierung
- **shadcn/ui**: Für die wunderschönen UI-Komponenten
- **React Community**: Für das fantastische Framework

---

**Viel Erfolg beim Mining! 🚀**

