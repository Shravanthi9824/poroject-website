// Small helpers: smooth scroll and PDF download
document.addEventListener('DOMContentLoaded', function(){
  // smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Download PDF button - expects file at assets/rf-report.pdf
  const dlBtn = document.getElementById('download-pdf');
  dlBtn && dlBtn.addEventListener('click', ()=>{
    const link = document.createElement('a');
    link.href = 'assets/rf-report.pdf';
    link.download = 'RF_Based_Communication_Report.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
});
