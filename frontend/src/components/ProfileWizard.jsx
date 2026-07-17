import React, { useState } from 'react';

export const ProfileWizard = ({ onGeneratePlan, isGenerating, t = (k) => k }) => {
  const [profile, setProfile] = useState({
    seatSection: 'SEC-101',
    noise: 4,
    light: 5,
    crowd: 6,
    movement: 3,
    quietExit: true,
    serviceAnimal: false
  });

  const [companionOn, setCompanionOn] = useState(false);
  const [companion, setCompanion] = useState({
    name: '',
    noise: 4,
    crowd: 6,
    mobility: 2
  });

  const handleSubmit = () => {
    onGeneratePlan({
      ...profile,
      companion: companionOn ? companion : null
    });
  };

  return (
    <section className="card" aria-labelledby="profile-heading">
      <span className="eyebrow">{t('step1')}</span>
      <h2 id="profile-heading">{t('profile_heading')}</h2>
      <p className="sub">{t('profile_sub')}</p>

      {/* Seat Selection */}
      <div className="field">
        <div className="field-label">
          <label htmlFor="seatSection">Seat Section</label>
        </div>
        <select 
          id="seatSection" 
          value={profile.seatSection} 
          onChange={(e) => setProfile(p => ({...p, seatSection: e.target.value}))}
          style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--border)', fontFamily: 'var(--font-body)', fontSize: '13.5px', background: 'var(--bg-subtle)' }}
        >
          <option value="SEC-101">Section 101 (North West)</option>
          <option value="SEC-102">Section 102 (North East)</option>
          <option value="SEC-103">Section 103 (South West)</option>
          <option value="SEC-104">Section 104 (South East)</option>
        </select>
      </div>

      {/* Primary Profile Sliders */}
      <div className="field">
        <div className="field-label">
          <label htmlFor="noise">{t('noise')}</label>
          <span className="field-value">{profile.noise}</span>
        </div>
        <input 
          type="range" id="noise" min="0" max="10" 
          value={profile.noise} 
          onChange={(e) => setProfile(p => ({...p, noise: +e.target.value}))} 
        />
      </div>
      <div className="field">
        <div className="field-label">
          <label htmlFor="light">{t('light')}</label>
          <span className="field-value">{profile.light}</span>
        </div>
        <input 
          type="range" id="light" min="0" max="10" 
          value={profile.light} 
          onChange={(e) => setProfile(p => ({...p, light: +e.target.value}))} 
        />
      </div>
      <div className="field">
        <div className="field-label">
          <label htmlFor="crowd">{t('crowd')}</label>
          <span className="field-value">{profile.crowd}</span>
        </div>
        <input 
          type="range" id="crowd" min="0" max="10" 
          value={profile.crowd} 
          onChange={(e) => setProfile(p => ({...p, crowd: +e.target.value}))} 
        />
      </div>
      <div className="field">
        <div className="field-label">
          <label htmlFor="movement">{t('movement')}</label>
          <span className="field-value">{profile.movement}</span>
        </div>
        <input 
          type="range" id="movement" min="0" max="10" 
          value={profile.movement} 
          onChange={(e) => setProfile(p => ({...p, movement: +e.target.value}))} 
        />
        <p className="field-hint">{t('movement_hint')}</p>
      </div>

      {/* Toggles */}
      <div className="toggle-row">
        <label htmlFor="quietExit">{t('quiet_exit')}</label>
        <label className="switch" htmlFor="quietExit">
          <input 
            type="checkbox" id="quietExit" 
            checked={profile.quietExit} 
            onChange={e => setProfile(p => ({...p, quietExit: e.target.checked}))}
          />
          <span className="slider-pill"></span>
        </label>
      </div>
      <div className="toggle-row">
        <label htmlFor="serviceAnimal">{t('service_animal')}</label>
        <label className="switch" htmlFor="serviceAnimal">
          <input 
            type="checkbox" id="serviceAnimal" 
            checked={profile.serviceAnimal} 
            onChange={e => setProfile(p => ({...p, serviceAnimal: e.target.checked}))}
          />
          <span className="slider-pill"></span>
        </label>
      </div>

      {/* Companion Mode */}
      <div className="companion-toggle-row">
        <label htmlFor="companionMode">{t('companion_mode')}</label>
        <label className="switch" htmlFor="companionMode">
          <input 
            type="checkbox" id="companionMode" 
            checked={companionOn}
            onChange={e => setCompanionOn(e.target.checked)}
          />
          <span className="slider-pill"></span>
        </label>
      </div>

      <div className={`companion-panel ${companionOn ? 'open' : ''}`}>
        <h4>{t('companion_heading')}</h4>
        <input 
          type="text" 
          placeholder={t('companion_name')} 
          value={companion.name}
          onChange={e => setCompanion(c => ({...c, name: e.target.value}))}
        />
        <div className="field">
          <div className="field-label">
            <label htmlFor="cNoise">{t('c_noise')}</label>
            <span className="field-value">{companion.noise}</span>
          </div>
          <input 
            type="range" id="cNoise" min="0" max="10" 
            value={companion.noise}
            onChange={e => setCompanion(c => ({...c, noise: +e.target.value}))}
          />
        </div>
        <div className="field">
          <div className="field-label">
            <label htmlFor="cCrowd">{t('c_crowd')}</label>
            <span className="field-value">{companion.crowd}</span>
          </div>
          <input 
            type="range" id="cCrowd" min="0" max="10" 
            value={companion.crowd}
            onChange={e => setCompanion(c => ({...c, crowd: +e.target.value}))}
          />
        </div>
        <div className="field" style={{ marginBottom: 0 }}>
          <div className="field-label">
            <label htmlFor="cMobility">{t('c_mobility')}</label>
            <span className="field-value">{companion.mobility}</span>
          </div>
          <input 
            type="range" id="cMobility" min="0" max="10" 
            value={companion.mobility}
            onChange={e => setCompanion(c => ({...c, mobility: +e.target.value}))}
          />
        </div>
      </div>

      <button className="btn-primary" onClick={handleSubmit} disabled={isGenerating}>
        {isGenerating ? t('generating') : t('generate_plan')}
      </button>
    </section>
  );
};
