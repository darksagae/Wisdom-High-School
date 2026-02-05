# Testing Guide - Wisdom High School Website

This guide helps you test all features and functionality of the website before going live.

## Quick Start Testing

### 1. Basic Functionality Test

1. **Open the website:**
   ```bash
   # Navigate to the wisdom directory
   cd wisdom
   # Open index.html in your browser
   ```

2. **Test Navigation:**
   - Click all menu items
   - Verify all pages load correctly
   - Check mobile menu (resize browser to mobile width)
   - Test back/forward browser buttons

### 2. Responsive Design Test

Test on different screen sizes:
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px and above

**Check:**
- ✅ Menu collapses to hamburger on mobile
- ✅ Images scale properly
- ✅ Text remains readable
- ✅ Forms are usable on mobile
- ✅ No horizontal scrolling

### 3. Contact Form Testing

**Location:** `contact.html`

**Test Cases:**

1. **Empty Form Submission:**
   - Leave all fields empty
   - Click "Send Message"
   - ✅ Should show error messages for required fields

2. **Invalid Email:**
   - Enter name: "John Doe"
   - Enter email: "invalid-email"
   - Enter subject and message
   - ✅ Should show email validation error

3. **Short Name:**
   - Enter name: "A"
   - ✅ Should show "Name must be at least 2 characters"

4. **Short Message:**
   - Enter message: "Hi"
   - ✅ Should show "Message must be at least 10 characters"

5. **Valid Form:**
   - Fill all required fields correctly
   - Click "Send Message"
   - ✅ Should show loading spinner
   - ✅ Should show success message after ~1.5 seconds
   - ✅ Form should reset

6. **Phone Number (Optional):**
   - Test with valid phone: "+256 700 123456"
   - Test with invalid phone: "123"
   - ✅ Invalid should show error

### 4. Accessibility Testing

**Tools to Use:**
- Browser DevTools (Lighthouse)
- Screen reader (NVDA, JAWS, or VoiceOver)
- Keyboard navigation

**Test Checklist:**

1. **Keyboard Navigation:**
   - ✅ Tab through all interactive elements
   - ✅ Enter/Space activates buttons
   - ✅ Escape closes mobile menu
   - ✅ All links are accessible via keyboard

2. **Screen Reader:**
   - ✅ All images have alt text
   - ✅ Form labels are announced
   - ✅ Error messages are announced
   - ✅ Navigation is clear

3. **ARIA Attributes:**
   - ✅ Mobile menu toggle has `aria-expanded`
   - ✅ Form fields have `aria-required`
   - ✅ Error messages have `aria-live`

### 5. SEO Testing

**Check Structured Data:**

1. **Google Rich Results Test:**
   - Visit: https://search.google.com/test/rich-results
   - Enter your website URL
   - ✅ Should show EducationalOrganization schema

2. **Meta Tags:**
   - View page source
   - ✅ Check for Open Graph tags
   - ✅ Check for Twitter Card tags
   - ✅ Verify meta description

3. **Sitemap:**
   - Visit: `yoursite.com/sitemap.xml`
   - ✅ Should display XML sitemap
   - ✅ All pages should be listed

4. **Robots.txt:**
   - Visit: `yoursite.com/robots.txt`
   - ✅ Should display robots file

### 6. Browser Compatibility

Test in:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

**Check:**
- Layout consistency
- JavaScript functionality
- Form validation
- Animations work

### 7. Performance Testing

**Use Google PageSpeed Insights:**
- Visit: https://pagespeed.web.dev/
- Enter your URL
- ✅ Aim for 90+ score

**Check:**
- ✅ Images are optimized
- ✅ CSS/JS are minified (for production)
- ✅ Caching headers are set (if using .htaccess)

### 8. Link Testing

**Check all links:**
- ✅ Internal navigation links
- ✅ Footer links
- ✅ Social media links (update with real URLs)
- ✅ External links open in new tab
- ✅ No broken links (404 errors)

### 9. Form Validation Testing

**Real-time Validation:**
1. Click in email field, then click out
   - ✅ If invalid, shows error immediately
2. Type in name field
   - ✅ Error clears when valid
3. Select subject dropdown
   - ✅ Required validation works

### 10. Mobile Menu Testing

1. **Open on Mobile/Tablet:**
   - ✅ Hamburger icon appears
   - ✅ Click opens menu
   - ✅ Menu overlays content
   - ✅ Click outside closes menu
   - ✅ Click link closes menu

2. **Accessibility:**
   - ✅ `aria-expanded` updates
   - ✅ Keyboard accessible

## Common Issues & Solutions

### Issue: Form not submitting
**Solution:** Check browser console for JavaScript errors

### Issue: Styles not loading
**Solution:** Verify `styles.css` path is correct

### Issue: Images not showing
**Solution:** Check image URLs (currently using Unsplash placeholders)

### Issue: Mobile menu not working
**Solution:** Ensure `script.js` is loaded and no console errors

## Pre-Launch Checklist

Before going live, ensure:

- [ ] All placeholder content replaced
- [ ] Contact information updated
- [ ] Social media links updated
- [ ] Images replaced with actual photos
- [ ] Google Maps integrated (if applicable)
- [ ] Form backend connected (if applicable)
- [ ] SSL certificate installed
- [ ] Domain name configured
- [ ] Analytics code added (if using)
- [ ] Backup created
- [ ] All pages tested
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags reviewed
- [ ] Accessibility tested

## Testing Tools

- **Browser DevTools:** F12 in most browsers
- **Lighthouse:** Built into Chrome DevTools
- **W3C Validator:** https://validator.w3.org/
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Rich Results Test:** https://search.google.com/test/rich-results

## Reporting Issues

If you find issues:
1. Note the browser and version
2. Note the page where issue occurs
3. Check browser console for errors
4. Take a screenshot if possible
5. Document steps to reproduce

---

**Last Updated:** January 2024

