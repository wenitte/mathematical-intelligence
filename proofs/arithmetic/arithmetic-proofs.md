<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>1000 Addition Proofs</title>
<style>
  :root {
    box-sizing: border-box;
    --bg: #ffffff;
    --fg: #1a1a1a;
    --muted: #6b6b6b;
    --accent: #4f46e5;
    --card-bg: #f7f7fb;
    --border: #e3e3ea;
    padding-top: env(safe-area-inset-top, 0px);
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --bg: #121214;
      --fg: #ececec;
      --muted: #a0a0a8;
      --accent: #8b85f7;
      --card-bg: #1c1c20;
      --border: #2c2c32;
    }
  }
  :root[data-theme="dark"] {
    --bg: #121214;
    --fg: #ececec;
    --muted: #a0a0a8;
    --accent: #8b85f7;
    --card-bg: #1c1c20;
    --border: #2c2c32;
  }
  html { height: 100%; scroll-padding-top: env(safe-area-inset-top, 0px); }
  body {
    height: 100%;
    margin: 0;
    background: var(--bg);
    color: var(--fg);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.5;
  }
  .wrap {
    max-width: 720px;
    margin: 0 auto;
    padding: 2rem 1.25rem 4rem;
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  h3 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: var(--accent);
    font-size: 1.05rem;
  }
  p {
    margin: 0.4rem 0;
    color: var(--fg);
  }
  ol {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.75rem 1.25rem 0.75rem 2.25rem;
    margin: 0.4rem 0 0.8rem;
  }
  li {
    margin: 0.25rem 0;
    overflow-wrap: break-word;
  }
  hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 1.5rem 0;
  }
  strong { color: var(--accent); }
  #search {
    position: sticky;
    top: env(safe-area-inset-top, 0px);
    background: var(--bg);
    padding: 0.75rem 0;
    z-index: 10;
  }
  #search input {
    width: 100%;
    padding: 0.6rem 0.8rem;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--card-bg);
    color: var(--fg);
    font-size: 1rem;
  }
  .hidden { display: none; }
  .count { color: var(--muted); font-size: 0.9rem; margin-top: 0.25rem; }
</style>
</head>
<body>
<div class="wrap">
  <div id="search">
    <input type="text" id="filterInput" placeholder="Filter by x, y, or result (e.g. 12 + 4 = 16)">
    <div class="count" id="countLabel"></div>
  </div>
  <h1>1000 Instances of the Successor-Function Addition Proof</h1>

<p>Each proof below follows the same pattern used for <strong>1 + 1 = 2</strong>, generalized to arbitrary x, y ∈ ℕ. All proofs rest on the Peano-style definitions:</p>

<p>- <strong>(a)</strong> n + 0 = n</p>
<p>- <strong>(b)</strong> n + S(m) = S(n + m)</p>

<p>where S(n) denotes the successor of n (i.e. n + 1), and numerals are shorthand for repeated succession from 0.</p>

<p>For each instance, we use the fact that y = S(y − 1), and that the sum of the predecessor pair, x + (y − 1) = z − 1, is already established by ordinary arithmetic (i.e., by induction on the pattern shown in the original proof).</p>

<hr>

<h3>1. 1 + 1 = 2</h3>

<ol>
<li>1 = S(0), so 1 + 1 = 1 + S(0)</li>
<li>By rule (b): 1 + S(0) = S(1 + 0)</li>
<li>Since 1 + 0 = 1 (established arithmetic fact)</li>
<li>So S(1 + 0) = S(1)</li>
<li>And S(1) = 2</li>
</ol>

<p><strong>Therefore: 1 + 1 = 2. ∎</strong></p>


<h3>2. 2 + 1 = 3</h3>

<ol>
<li>1 = S(0), so 2 + 1 = 2 + S(0)</li>
<li>By rule (b): 2 + S(0) = S(2 + 0)</li>
<li>Since 2 + 0 = 2 (established arithmetic fact)</li>
<li>So S(2 + 0) = S(2)</li>
<li>And S(2) = 3</li>
</ol>

<p><strong>Therefore: 2 + 1 = 3. ∎</strong></p>


<h3>3. 2 + 2 = 4</h3>

<ol>
<li>2 = S(1), so 2 + 2 = 2 + S(1)</li>
<li>By rule (b): 2 + S(1) = S(2 + 1)</li>
<li>Since 2 + 1 = 3 (established arithmetic fact)</li>
<li>So S(2 + 1) = S(3)</li>
<li>And S(3) = 4</li>
</ol>

<p><strong>Therefore: 2 + 2 = 4. ∎</strong></p>


<h3>4. 3 + 1 = 4</h3>

<ol>
<li>1 = S(0), so 3 + 1 = 3 + S(0)</li>
<li>By rule (b): 3 + S(0) = S(3 + 0)</li>
<li>Since 3 + 0 = 3 (established arithmetic fact)</li>
<li>So S(3 + 0) = S(3)</li>
<li>And S(3) = 4</li>
</ol>

<p><strong>Therefore: 3 + 1 = 4. ∎</strong></p>


<h3>5. 3 + 2 = 5</h3>

<ol>
<li>2 = S(1), so 3 + 2 = 3 + S(1)</li>
<li>By rule (b): 3 + S(1) = S(3 + 1)</li>
<li>Since 3 + 1 = 4 (established arithmetic fact)</li>
<li>So S(3 + 1) = S(4)</li>
<li>And S(4) = 5</li>
</ol>

<p><strong>Therefore: 3 + 2 = 5. ∎</strong></p>


<h3>6. 3 + 3 = 6</h3>

<ol>
<li>3 = S(2), so 3 + 3 = 3 + S(2)</li>
<li>By rule (b): 3 + S(2) = S(3 + 2)</li>
<li>Since 3 + 2 = 5 (established arithmetic fact)</li>
<li>So S(3 + 2) = S(5)</li>
<li>And S(5) = 6</li>
</ol>

<p><strong>Therefore: 3 + 3 = 6. ∎</strong></p>


<h3>7. 4 + 1 = 5</h3>

<ol>
<li>1 = S(0), so 4 + 1 = 4 + S(0)</li>
<li>By rule (b): 4 + S(0) = S(4 + 0)</li>
<li>Since 4 + 0 = 4 (established arithmetic fact)</li>
<li>So S(4 + 0) = S(4)</li>
<li>And S(4) = 5</li>
</ol>

<p><strong>Therefore: 4 + 1 = 5. ∎</strong></p>


<h3>8. 4 + 2 = 6</h3>

<ol>
<li>2 = S(1), so 4 + 2 = 4 + S(1)</li>
<li>By rule (b): 4 + S(1) = S(4 + 1)</li>
<li>Since 4 + 1 = 5 (established arithmetic fact)</li>
<li>So S(4 + 1) = S(5)</li>
<li>And S(5) = 6</li>
</ol>

<p><strong>Therefore: 4 + 2 = 6. ∎</strong></p>


<h3>9. 4 + 3 = 7</h3>

<ol>
<li>3 = S(2), so 4 + 3 = 4 + S(2)</li>
<li>By rule (b): 4 + S(2) = S(4 + 2)</li>
<li>Since 4 + 2 = 6 (established arithmetic fact)</li>
<li>So S(4 + 2) = S(6)</li>
<li>And S(6) = 7</li>
</ol>

<p><strong>Therefore: 4 + 3 = 7. ∎</strong></p>


<h3>10. 4 + 4 = 8</h3>

<ol>
<li>4 = S(3), so 4 + 4 = 4 + S(3)</li>
<li>By rule (b): 4 + S(3) = S(4 + 3)</li>
<li>Since 4 + 3 = 7 (established arithmetic fact)</li>
<li>So S(4 + 3) = S(7)</li>
<li>And S(7) = 8</li>
</ol>

<p><strong>Therefore: 4 + 4 = 8. ∎</strong></p>


<h3>11. 5 + 1 = 6</h3>

<ol>
<li>1 = S(0), so 5 + 1 = 5 + S(0)</li>
<li>By rule (b): 5 + S(0) = S(5 + 0)</li>
<li>Since 5 + 0 = 5 (established arithmetic fact)</li>
<li>So S(5 + 0) = S(5)</li>
<li>And S(5) = 6</li>
</ol>

<p><strong>Therefore: 5 + 1 = 6. ∎</strong></p>


<h3>12. 5 + 2 = 7</h3>

<ol>
<li>2 = S(1), so 5 + 2 = 5 + S(1)</li>
<li>By rule (b): 5 + S(1) = S(5 + 1)</li>
<li>Since 5 + 1 = 6 (established arithmetic fact)</li>
<li>So S(5 + 1) = S(6)</li>
<li>And S(6) = 7</li>
</ol>

<p><strong>Therefore: 5 + 2 = 7. ∎</strong></p>


<h3>13. 5 + 3 = 8</h3>

<ol>
<li>3 = S(2), so 5 + 3 = 5 + S(2)</li>
<li>By rule (b): 5 + S(2) = S(5 + 2)</li>
<li>Since 5 + 2 = 7 (established arithmetic fact)</li>
<li>So S(5 + 2) = S(7)</li>
<li>And S(7) = 8</li>
</ol>

<p><strong>Therefore: 5 + 3 = 8. ∎</strong></p>


<h3>14. 5 + 4 = 9</h3>

<ol>
<li>4 = S(3), so 5 + 4 = 5 + S(3)</li>
<li>By rule (b): 5 + S(3) = S(5 + 3)</li>
<li>Since 5 + 3 = 8 (established arithmetic fact)</li>
<li>So S(5 + 3) = S(8)</li>
<li>And S(8) = 9</li>
</ol>

<p><strong>Therefore: 5 + 4 = 9. ∎</strong></p>


<h3>15. 5 + 5 = 10</h3>

<ol>
<li>5 = S(4), so 5 + 5 = 5 + S(4)</li>
<li>By rule (b): 5 + S(4) = S(5 + 4)</li>
<li>Since 5 + 4 = 9 (established arithmetic fact)</li>
<li>So S(5 + 4) = S(9)</li>
<li>And S(9) = 10</li>
</ol>

<p><strong>Therefore: 5 + 5 = 10. ∎</strong></p>


<h3>16. 6 + 1 = 7</h3>

<ol>
<li>1 = S(0), so 6 + 1 = 6 + S(0)</li>
<li>By rule (b): 6 + S(0) = S(6 + 0)</li>
<li>Since 6 + 0 = 6 (established arithmetic fact)</li>
<li>So S(6 + 0) = S(6)</li>
<li>And S(6) = 7</li>
</ol>

<p><strong>Therefore: 6 + 1 = 7. ∎</strong></p>


<h3>17. 6 + 2 = 8</h3>

<ol>
<li>2 = S(1), so 6 + 2 = 6 + S(1)</li>
<li>By rule (b): 6 + S(1) = S(6 + 1)</li>
<li>Since 6 + 1 = 7 (established arithmetic fact)</li>
<li>So S(6 + 1) = S(7)</li>
<li>And S(7) = 8</li>
</ol>

<p><strong>Therefore: 6 + 2 = 8. ∎</strong></p>


<h3>18. 6 + 3 = 9</h3>

<ol>
<li>3 = S(2), so 6 + 3 = 6 + S(2)</li>
<li>By rule (b): 6 + S(2) = S(6 + 2)</li>
<li>Since 6 + 2 = 8 (established arithmetic fact)</li>
<li>So S(6 + 2) = S(8)</li>
<li>And S(8) = 9</li>
</ol>

<p><strong>Therefore: 6 + 3 = 9. ∎</strong></p>


<h3>19. 6 + 4 = 10</h3>

<ol>
<li>4 = S(3), so 6 + 4 = 6 + S(3)</li>
<li>By rule (b): 6 + S(3) = S(6 + 3)</li>
<li>Since 6 + 3 = 9 (established arithmetic fact)</li>
<li>So S(6 + 3) = S(9)</li>
<li>And S(9) = 10</li>
</ol>

<p><strong>Therefore: 6 + 4 = 10. ∎</strong></p>


<h3>20. 6 + 5 = 11</h3>

<ol>
<li>5 = S(4), so 6 + 5 = 6 + S(4)</li>
<li>By rule (b): 6 + S(4) = S(6 + 4)</li>
<li>Since 6 + 4 = 10 (established arithmetic fact)</li>
<li>So S(6 + 4) = S(10)</li>
<li>And S(10) = 11</li>
</ol>

<p><strong>Therefore: 6 + 5 = 11. ∎</strong></p>


<h3>21. 6 + 6 = 12</h3>

<ol>
<li>6 = S(5), so 6 + 6 = 6 + S(5)</li>
<li>By rule (b): 6 + S(5) = S(6 + 5)</li>
<li>Since 6 + 5 = 11 (established arithmetic fact)</li>
<li>So S(6 + 5) = S(11)</li>
<li>And S(11) = 12</li>
</ol>

<p><strong>Therefore: 6 + 6 = 12. ∎</strong></p>


<h3>22. 7 + 1 = 8</h3>

<ol>
<li>1 = S(0), so 7 + 1 = 7 + S(0)</li>
<li>By rule (b): 7 + S(0) = S(7 + 0)</li>
<li>Since 7 + 0 = 7 (established arithmetic fact)</li>
<li>So S(7 + 0) = S(7)</li>
<li>And S(7) = 8</li>
</ol>

<p><strong>Therefore: 7 + 1 = 8. ∎</strong></p>


<h3>23. 7 + 2 = 9</h3>

<ol>
<li>2 = S(1), so 7 + 2 = 7 + S(1)</li>
<li>By rule (b): 7 + S(1) = S(7 + 1)</li>
<li>Since 7 + 1 = 8 (established arithmetic fact)</li>
<li>So S(7 + 1) = S(8)</li>
<li>And S(8) = 9</li>
</ol>

<p><strong>Therefore: 7 + 2 = 9. ∎</strong></p>


<h3>24. 7 + 3 = 10</h3>

<ol>
<li>3 = S(2), so 7 + 3 = 7 + S(2)</li>
<li>By rule (b): 7 + S(2) = S(7 + 2)</li>
<li>Since 7 + 2 = 9 (established arithmetic fact)</li>
<li>So S(7 + 2) = S(9)</li>
<li>And S(9) = 10</li>
</ol>

<p><strong>Therefore: 7 + 3 = 10. ∎</strong></p>


<h3>25. 7 + 4 = 11</h3>

<ol>
<li>4 = S(3), so 7 + 4 = 7 + S(3)</li>
<li>By rule (b): 7 + S(3) = S(7 + 3)</li>
<li>Since 7 + 3 = 10 (established arithmetic fact)</li>
<li>So S(7 + 3) = S(10)</li>
<li>And S(10) = 11</li>
</ol>

<p><strong>Therefore: 7 + 4 = 11. ∎</strong></p>


<h3>26. 7 + 5 = 12</h3>

<ol>
<li>5 = S(4), so 7 + 5 = 7 + S(4)</li>
<li>By rule (b): 7 + S(4) = S(7 + 4)</li>
<li>Since 7 + 4 = 11 (established arithmetic fact)</li>
<li>So S(7 + 4) = S(11)</li>
<li>And S(11) = 12</li>
</ol>

<p><strong>Therefore: 7 + 5 = 12. ∎</strong></p>


<h3>27. 7 + 6 = 13</h3>

<ol>
<li>6 = S(5), so 7 + 6 = 7 + S(5)</li>
<li>By rule (b): 7 + S(5) = S(7 + 5)</li>
<li>Since 7 + 5 = 12 (established arithmetic fact)</li>
<li>So S(7 + 5) = S(12)</li>
<li>And S(12) = 13</li>
</ol>

<p><strong>Therefore: 7 + 6 = 13. ∎</strong></p>


<h3>28. 7 + 7 = 14</h3>

<ol>
<li>7 = S(6), so 7 + 7 = 7 + S(6)</li>
<li>By rule (b): 7 + S(6) = S(7 + 6)</li>
<li>Since 7 + 6 = 13 (established arithmetic fact)</li>
<li>So S(7 + 6) = S(13)</li>
<li>And S(13) = 14</li>
</ol>

<p><strong>Therefore: 7 + 7 = 14. ∎</strong></p>


<h3>29. 8 + 1 = 9</h3>

<ol>
<li>1 = S(0), so 8 + 1 = 8 + S(0)</li>
<li>By rule (b): 8 + S(0) = S(8 + 0)</li>
<li>Since 8 + 0 = 8 (established arithmetic fact)</li>
<li>So S(8 + 0) = S(8)</li>
<li>And S(8) = 9</li>
</ol>

<p><strong>Therefore: 8 + 1 = 9. ∎</strong></p>


<h3>30. 8 + 2 = 10</h3>

<ol>
<li>2 = S(1), so 8 + 2 = 8 + S(1)</li>
<li>By rule (b): 8 + S(1) = S(8 + 1)</li>
<li>Since 8 + 1 = 9 (established arithmetic fact)</li>
<li>So S(8 + 1) = S(9)</li>
<li>And S(9) = 10</li>
</ol>

<p><strong>Therefore: 8 + 2 = 10. ∎</strong></p>


<h3>31. 8 + 3 = 11</h3>

<ol>
<li>3 = S(2), so 8 + 3 = 8 + S(2)</li>
<li>By rule (b): 8 + S(2) = S(8 + 2)</li>
<li>Since 8 + 2 = 10 (established arithmetic fact)</li>
<li>So S(8 + 2) = S(10)</li>
<li>And S(10) = 11</li>
</ol>

<p><strong>Therefore: 8 + 3 = 11. ∎</strong></p>


<h3>32. 8 + 4 = 12</h3>

<ol>
<li>4 = S(3), so 8 + 4 = 8 + S(3)</li>
<li>By rule (b): 8 + S(3) = S(8 + 3)</li>
<li>Since 8 + 3 = 11 (established arithmetic fact)</li>
<li>So S(8 + 3) = S(11)</li>
<li>And S(11) = 12</li>
</ol>

<p><strong>Therefore: 8 + 4 = 12. ∎</strong></p>


<h3>33. 8 + 5 = 13</h3>

<ol>
<li>5 = S(4), so 8 + 5 = 8 + S(4)</li>
<li>By rule (b): 8 + S(4) = S(8 + 4)</li>
<li>Since 8 + 4 = 12 (established arithmetic fact)</li>
<li>So S(8 + 4) = S(12)</li>
<li>And S(12) = 13</li>
</ol>

<p><strong>Therefore: 8 + 5 = 13. ∎</strong></p>


<h3>34. 8 + 6 = 14</h3>

<ol>
<li>6 = S(5), so 8 + 6 = 8 + S(5)</li>
<li>By rule (b): 8 + S(5) = S(8 + 5)</li>
<li>Since 8 + 5 = 13 (established arithmetic fact)</li>
<li>So S(8 + 5) = S(13)</li>
<li>And S(13) = 14</li>
</ol>

<p><strong>Therefore: 8 + 6 = 14. ∎</strong></p>


<h3>35. 8 + 7 = 15</h3>

<ol>
<li>7 = S(6), so 8 + 7 = 8 + S(6)</li>
<li>By rule (b): 8 + S(6) = S(8 + 6)</li>
<li>Since 8 + 6 = 14 (established arithmetic fact)</li>
<li>So S(8 + 6) = S(14)</li>
<li>And S(14) = 15</li>
</ol>

<p><strong>Therefore: 8 + 7 = 15. ∎</strong></p>


<h3>36. 8 + 8 = 16</h3>

<ol>
<li>8 = S(7), so 8 + 8 = 8 + S(7)</li>
<li>By rule (b): 8 + S(7) = S(8 + 7)</li>
<li>Since 8 + 7 = 15 (established arithmetic fact)</li>
<li>So S(8 + 7) = S(15)</li>
<li>And S(15) = 16</li>
</ol>

<p><strong>Therefore: 8 + 8 = 16. ∎</strong></p>


<h3>37. 9 + 1 = 10</h3>

<ol>
<li>1 = S(0), so 9 + 1 = 9 + S(0)</li>
<li>By rule (b): 9 + S(0) = S(9 + 0)</li>
<li>Since 9 + 0 = 9 (established arithmetic fact)</li>
<li>So S(9 + 0) = S(9)</li>
<li>And S(9) = 10</li>
</ol>

<p><strong>Therefore: 9 + 1 = 10. ∎</strong></p>


<h3>38. 9 + 2 = 11</h3>

<ol>
<li>2 = S(1), so 9 + 2 = 9 + S(1)</li>
<li>By rule (b): 9 + S(1) = S(9 + 1)</li>
<li>Since 9 + 1 = 10 (established arithmetic fact)</li>
<li>So S(9 + 1) = S(10)</li>
<li>And S(10) = 11</li>
</ol>

<p><strong>Therefore: 9 + 2 = 11. ∎</strong></p>


<h3>39. 9 + 3 = 12</h3>

<ol>
<li>3 = S(2), so 9 + 3 = 9 + S(2)</li>
<li>By rule (b): 9 + S(2) = S(9 + 2)</li>
<li>Since 9 + 2 = 11 (established arithmetic fact)</li>
<li>So S(9 + 2) = S(11)</li>
<li>And S(11) = 12</li>
</ol>

<p><strong>Therefore: 9 + 3 = 12. ∎</strong></p>


<h3>40. 9 + 4 = 13</h3>

<ol>
<li>4 = S(3), so 9 + 4 = 9 + S(3)</li>
<li>By rule (b): 9 + S(3) = S(9 + 3)</li>
<li>Since 9 + 3 = 12 (established arithmetic fact)</li>
<li>So S(9 + 3) = S(12)</li>
<li>And S(12) = 13</li>
</ol>

<p><strong>Therefore: 9 + 4 = 13. ∎</strong></p>


<h3>41. 9 + 5 = 14</h3>

<ol>
<li>5 = S(4), so 9 + 5 = 9 + S(4)</li>
<li>By rule (b): 9 + S(4) = S(9 + 4)</li>
<li>Since 9 + 4 = 13 (established arithmetic fact)</li>
<li>So S(9 + 4) = S(13)</li>
<li>And S(13) = 14</li>
</ol>

<p><strong>Therefore: 9 + 5 = 14. ∎</strong></p>


<h3>42. 9 + 6 = 15</h3>

<ol>
<li>6 = S(5), so 9 + 6 = 9 + S(5)</li>
<li>By rule (b): 9 + S(5) = S(9 + 5)</li>
<li>Since 9 + 5 = 14 (established arithmetic fact)</li>
<li>So S(9 + 5) = S(14)</li>
<li>And S(14) = 15</li>
</ol>

<p><strong>Therefore: 9 + 6 = 15. ∎</strong></p>


<h3>43. 9 + 7 = 16</h3>

<ol>
<li>7 = S(6), so 9 + 7 = 9 + S(6)</li>
<li>By rule (b): 9 + S(6) = S(9 + 6)</li>
<li>Since 9 + 6 = 15 (established arithmetic fact)</li>
<li>So S(9 + 6) = S(15)</li>
<li>And S(15) = 16</li>
</ol>

<p><strong>Therefore: 9 + 7 = 16. ∎</strong></p>


<h3>44. 9 + 8 = 17</h3>

<ol>
<li>8 = S(7), so 9 + 8 = 9 + S(7)</li>
<li>By rule (b): 9 + S(7) = S(9 + 7)</li>
<li>Since 9 + 7 = 16 (established arithmetic fact)</li>
<li>So S(9 + 7) = S(16)</li>
<li>And S(16) = 17</li>
</ol>

<p><strong>Therefore: 9 + 8 = 17. ∎</strong></p>


<h3>45. 9 + 9 = 18</h3>

<ol>
<li>9 = S(8), so 9 + 9 = 9 + S(8)</li>
<li>By rule (b): 9 + S(8) = S(9 + 8)</li>
<li>Since 9 + 8 = 17 (established arithmetic fact)</li>
<li>So S(9 + 8) = S(17)</li>
<li>And S(17) = 18</li>
</ol>

<p><strong>Therefore: 9 + 9 = 18. ∎</strong></p>


<h3>46. 10 + 1 = 11</h3>

<ol>
<li>1 = S(0), so 10 + 1 = 10 + S(0)</li>
<li>By rule (b): 10 + S(0) = S(10 + 0)</li>
<li>Since 10 + 0 = 10 (established arithmetic fact)</li>
<li>So S(10 + 0) = S(10)</li>
<li>And S(10) = 11</li>
</ol>

<p><strong>Therefore: 10 + 1 = 11. ∎</strong></p>


<h3>47. 10 + 2 = 12</h3>

<ol>
<li>2 = S(1), so 10 + 2 = 10 + S(1)</li>
<li>By rule (b): 10 + S(1) = S(10 + 1)</li>
<li>Since 10 + 1 = 11 (established arithmetic fact)</li>
<li>So S(10 + 1) = S(11)</li>
<li>And S(11) = 12</li>
</ol>

<p><strong>Therefore: 10 + 2 = 12. ∎</strong></p>


<h3>48. 10 + 3 = 13</h3>

<ol>
<li>3 = S(2), so 10 + 3 = 10 + S(2)</li>
<li>By rule (b): 10 + S(2) = S(10 + 2)</li>
<li>Since 10 + 2 = 12 (established arithmetic fact)</li>
<li>So S(10 + 2) = S(12)</li>
<li>And S(12) = 13</li>
</ol>

<p><strong>Therefore: 10 + 3 = 13. ∎</strong></p>


<h3>49. 10 + 4 = 14</h3>

<ol>
<li>4 = S(3), so 10 + 4 = 10 + S(3)</li>
<li>By rule (b): 10 + S(3) = S(10 + 3)</li>
<li>Since 10 + 3 = 13 (established arithmetic fact)</li>
<li>So S(10 + 3) = S(13)</li>
<li>And S(13) = 14</li>
</ol>

<p><strong>Therefore: 10 + 4 = 14. ∎</strong></p>


<h3>50. 10 + 5 = 15</h3>

<ol>
<li>5 = S(4), so 10 + 5 = 10 + S(4)</li>
<li>By rule (b): 10 + S(4) = S(10 + 4)</li>
<li>Since 10 + 4 = 14 (established arithmetic fact)</li>
<li>So S(10 + 4) = S(14)</li>
<li>And S(14) = 15</li>
</ol>

<p><strong>Therefore: 10 + 5 = 15. ∎</strong></p>


<h3>51. 10 + 6 = 16</h3>

<ol>
<li>6 = S(5), so 10 + 6 = 10 + S(5)</li>
<li>By rule (b): 10 + S(5) = S(10 + 5)</li>
<li>Since 10 + 5 = 15 (established arithmetic fact)</li>
<li>So S(10 + 5) = S(15)</li>
<li>And S(15) = 16</li>
</ol>

<p><strong>Therefore: 10 + 6 = 16. ∎</strong></p>


<h3>52. 10 + 7 = 17</h3>

<ol>
<li>7 = S(6), so 10 + 7 = 10 + S(6)</li>
<li>By rule (b): 10 + S(6) = S(10 + 6)</li>
<li>Since 10 + 6 = 16 (established arithmetic fact)</li>
<li>So S(10 + 6) = S(16)</li>
<li>And S(16) = 17</li>
</ol>

<p><strong>Therefore: 10 + 7 = 17. ∎</strong></p>


<h3>53. 10 + 8 = 18</h3>

<ol>
<li>8 = S(7), so 10 + 8 = 10 + S(7)</li>
<li>By rule (b): 10 + S(7) = S(10 + 7)</li>
<li>Since 10 + 7 = 17 (established arithmetic fact)</li>
<li>So S(10 + 7) = S(17)</li>
<li>And S(17) = 18</li>
</ol>

<p><strong>Therefore: 10 + 8 = 18. ∎</strong></p>


<h3>54. 10 + 9 = 19</h3>

<ol>
<li>9 = S(8), so 10 + 9 = 10 + S(8)</li>
<li>By rule (b): 10 + S(8) = S(10 + 8)</li>
<li>Since 10 + 8 = 18 (established arithmetic fact)</li>
<li>So S(10 + 8) = S(18)</li>
<li>And S(18) = 19</li>
</ol>

<p><strong>Therefore: 10 + 9 = 19. ∎</strong></p>


<h3>55. 10 + 10 = 20</h3>

<ol>
<li>10 = S(9), so 10 + 10 = 10 + S(9)</li>
<li>By rule (b): 10 + S(9) = S(10 + 9)</li>
<li>Since 10 + 9 = 19 (established arithmetic fact)</li>
<li>So S(10 + 9) = S(19)</li>
<li>And S(19) = 20</li>
</ol>

<p><strong>Therefore: 10 + 10 = 20. ∎</strong></p>


<h3>56. 11 + 1 = 12</h3>

<ol>
<li>1 = S(0), so 11 + 1 = 11 + S(0)</li>
<li>By rule (b): 11 + S(0) = S(11 + 0)</li>
<li>Since 11 + 0 = 11 (established arithmetic fact)</li>
<li>So S(11 + 0) = S(11)</li>
<li>And S(11) = 12</li>
</ol>

<p><strong>Therefore: 11 + 1 = 12. ∎</strong></p>


<h3>57. 11 + 2 = 13</h3>

<ol>
<li>2 = S(1), so 11 + 2 = 11 + S(1)</li>
<li>By rule (b): 11 + S(1) = S(11 + 1)</li>
<li>Since 11 + 1 = 12 (established arithmetic fact)</li>
<li>So S(11 + 1) = S(12)</li>
<li>And S(12) = 13</li>
</ol>

<p><strong>Therefore: 11 + 2 = 13. ∎</strong></p>


<h3>58. 11 + 3 = 14</h3>

<ol>
<li>3 = S(2), so 11 + 3 = 11 + S(2)</li>
<li>By rule (b): 11 + S(2) = S(11 + 2)</li>
<li>Since 11 + 2 = 13 (established arithmetic fact)</li>
<li>So S(11 + 2) = S(13)</li>
<li>And S(13) = 14</li>
</ol>

<p><strong>Therefore: 11 + 3 = 14. ∎</strong></p>


<h3>59. 11 + 4 = 15</h3>

<ol>
<li>4 = S(3), so 11 + 4 = 11 + S(3)</li>
<li>By rule (b): 11 + S(3) = S(11 + 3)</li>
<li>Since 11 + 3 = 14 (established arithmetic fact)</li>
<li>So S(11 + 3) = S(14)</li>
<li>And S(14) = 15</li>
</ol>

<p><strong>Therefore: 11 + 4 = 15. ∎</strong></p>


<h3>60. 11 + 5 = 16</h3>

<ol>
<li>5 = S(4), so 11 + 5 = 11 + S(4)</li>
<li>By rule (b): 11 + S(4) = S(11 + 4)</li>
<li>Since 11 + 4 = 15 (established arithmetic fact)</li>
<li>So S(11 + 4) = S(15)</li>
<li>And S(15) = 16</li>
</ol>

<p><strong>Therefore: 11 + 5 = 16. ∎</strong></p>


<h3>61. 11 + 6 = 17</h3>

<ol>
<li>6 = S(5), so 11 + 6 = 11 + S(5)</li>
<li>By rule (b): 11 + S(5) = S(11 + 5)</li>
<li>Since 11 + 5 = 16 (established arithmetic fact)</li>
<li>So S(11 + 5) = S(16)</li>
<li>And S(16) = 17</li>
</ol>

<p><strong>Therefore: 11 + 6 = 17. ∎</strong></p>


<h3>62. 11 + 7 = 18</h3>

<ol>
<li>7 = S(6), so 11 + 7 = 11 + S(6)</li>
<li>By rule (b): 11 + S(6) = S(11 + 6)</li>
<li>Since 11 + 6 = 17 (established arithmetic fact)</li>
<li>So S(11 + 6) = S(17)</li>
<li>And S(17) = 18</li>
</ol>

<p><strong>Therefore: 11 + 7 = 18. ∎</strong></p>


<h3>63. 11 + 8 = 19</h3>

<ol>
<li>8 = S(7), so 11 + 8 = 11 + S(7)</li>
<li>By rule (b): 11 + S(7) = S(11 + 7)</li>
<li>Since 11 + 7 = 18 (established arithmetic fact)</li>
<li>So S(11 + 7) = S(18)</li>
<li>And S(18) = 19</li>
</ol>

<p><strong>Therefore: 11 + 8 = 19. ∎</strong></p>


<h3>64. 11 + 9 = 20</h3>

<ol>
<li>9 = S(8), so 11 + 9 = 11 + S(8)</li>
<li>By rule (b): 11 + S(8) = S(11 + 8)</li>
<li>Since 11 + 8 = 19 (established arithmetic fact)</li>
<li>So S(11 + 8) = S(19)</li>
<li>And S(19) = 20</li>
</ol>

<p><strong>Therefore: 11 + 9 = 20. ∎</strong></p>


<h3>65. 11 + 10 = 21</h3>

<ol>
<li>10 = S(9), so 11 + 10 = 11 + S(9)</li>
<li>By rule (b): 11 + S(9) = S(11 + 9)</li>
<li>Since 11 + 9 = 20 (established arithmetic fact)</li>
<li>So S(11 + 9) = S(20)</li>
<li>And S(20) = 21</li>
</ol>

<p><strong>Therefore: 11 + 10 = 21. ∎</strong></p>


<h3>66. 11 + 11 = 22</h3>

<ol>
<li>11 = S(10), so 11 + 11 = 11 + S(10)</li>
<li>By rule (b): 11 + S(10) = S(11 + 10)</li>
<li>Since 11 + 10 = 21 (established arithmetic fact)</li>
<li>So S(11 + 10) = S(21)</li>
<li>And S(21) = 22</li>
</ol>

<p><strong>Therefore: 11 + 11 = 22. ∎</strong></p>


<h3>67. 12 + 1 = 13</h3>

<ol>
<li>1 = S(0), so 12 + 1 = 12 + S(0)</li>
<li>By rule (b): 12 + S(0) = S(12 + 0)</li>
<li>Since 12 + 0 = 12 (established arithmetic fact)</li>
<li>So S(12 + 0) = S(12)</li>
<li>And S(12) = 13</li>
</ol>

<p><strong>Therefore: 12 + 1 = 13. ∎</strong></p>


<h3>68. 12 + 2 = 14</h3>

<ol>
<li>2 = S(1), so 12 + 2 = 12 + S(1)</li>
<li>By rule (b): 12 + S(1) = S(12 + 1)</li>
<li>Since 12 + 1 = 13 (established arithmetic fact)</li>
<li>So S(12 + 1) = S(13)</li>
<li>And S(13) = 14</li>
</ol>

<p><strong>Therefore: 12 + 2 = 14. ∎</strong></p>


<h3>69. 12 + 3 = 15</h3>

<ol>
<li>3 = S(2), so 12 + 3 = 12 + S(2)</li>
<li>By rule (b): 12 + S(2) = S(12 + 2)</li>
<li>Since 12 + 2 = 14 (established arithmetic fact)</li>
<li>So S(12 + 2) = S(14)</li>
<li>And S(14) = 15</li>
</ol>

<p><strong>Therefore: 12 + 3 = 15. ∎</strong></p>


<h3>70. 12 + 4 = 16</h3>

<ol>
<li>4 = S(3), so 12 + 4 = 12 + S(3)</li>
<li>By rule (b): 12 + S(3) = S(12 + 3)</li>
<li>Since 12 + 3 = 15 (established arithmetic fact)</li>
<li>So S(12 + 3) = S(15)</li>
<li>And S(15) = 16</li>
</ol>

<p><strong>Therefore: 12 + 4 = 16. ∎</strong></p>


<h3>71. 12 + 5 = 17</h3>

<ol>
<li>5 = S(4), so 12 + 5 = 12 + S(4)</li>
<li>By rule (b): 12 + S(4) = S(12 + 4)</li>
<li>Since 12 + 4 = 16 (established arithmetic fact)</li>
<li>So S(12 + 4) = S(16)</li>
<li>And S(16) = 17</li>
</ol>

<p><strong>Therefore: 12 + 5 = 17. ∎</strong></p>


<h3>72. 12 + 6 = 18</h3>

<ol>
<li>6 = S(5), so 12 + 6 = 12 + S(5)</li>
<li>By rule (b): 12 + S(5) = S(12 + 5)</li>
<li>Since 12 + 5 = 17 (established arithmetic fact)</li>
<li>So S(12 + 5) = S(17)</li>
<li>And S(17) = 18</li>
</ol>

<p><strong>Therefore: 12 + 6 = 18. ∎</strong></p>


<h3>73. 12 + 7 = 19</h3>

<ol>
<li>7 = S(6), so 12 + 7 = 12 + S(6)</li>
<li>By rule (b): 12 + S(6) = S(12 + 6)</li>
<li>Since 12 + 6 = 18 (established arithmetic fact)</li>
<li>So S(12 + 6) = S(18)</li>
<li>And S(18) = 19</li>
</ol>

<p><strong>Therefore: 12 + 7 = 19. ∎</strong></p>


<h3>74. 12 + 8 = 20</h3>

<ol>
<li>8 = S(7), so 12 + 8 = 12 + S(7)</li>
<li>By rule (b): 12 + S(7) = S(12 + 7)</li>
<li>Since 12 + 7 = 19 (established arithmetic fact)</li>
<li>So S(12 + 7) = S(19)</li>
<li>And S(19) = 20</li>
</ol>

<p><strong>Therefore: 12 + 8 = 20. ∎</strong></p>


<h3>75. 12 + 9 = 21</h3>

<ol>
<li>9 = S(8), so 12 + 9 = 12 + S(8)</li>
<li>By rule (b): 12 + S(8) = S(12 + 8)</li>
<li>Since 12 + 8 = 20 (established arithmetic fact)</li>
<li>So S(12 + 8) = S(20)</li>
<li>And S(20) = 21</li>
</ol>

<p><strong>Therefore: 12 + 9 = 21. ∎</strong></p>


<h3>76. 12 + 10 = 22</h3>

<ol>
<li>10 = S(9), so 12 + 10 = 12 + S(9)</li>
<li>By rule (b): 12 + S(9) = S(12 + 9)</li>
<li>Since 12 + 9 = 21 (established arithmetic fact)</li>
<li>So S(12 + 9) = S(21)</li>
<li>And S(21) = 22</li>
</ol>

<p><strong>Therefore: 12 + 10 = 22. ∎</strong></p>


<h3>77. 12 + 11 = 23</h3>

<ol>
<li>11 = S(10), so 12 + 11 = 12 + S(10)</li>
<li>By rule (b): 12 + S(10) = S(12 + 10)</li>
<li>Since 12 + 10 = 22 (established arithmetic fact)</li>
<li>So S(12 + 10) = S(22)</li>
<li>And S(22) = 23</li>
</ol>

<p><strong>Therefore: 12 + 11 = 23. ∎</strong></p>


<h3>78. 12 + 12 = 24</h3>

<ol>
<li>12 = S(11), so 12 + 12 = 12 + S(11)</li>
<li>By rule (b): 12 + S(11) = S(12 + 11)</li>
<li>Since 12 + 11 = 23 (established arithmetic fact)</li>
<li>So S(12 + 11) = S(23)</li>
<li>And S(23) = 24</li>
</ol>

<p><strong>Therefore: 12 + 12 = 24. ∎</strong></p>


<h3>79. 13 + 1 = 14</h3>

<ol>
<li>1 = S(0), so 13 + 1 = 13 + S(0)</li>
<li>By rule (b): 13 + S(0) = S(13 + 0)</li>
<li>Since 13 + 0 = 13 (established arithmetic fact)</li>
<li>So S(13 + 0) = S(13)</li>
<li>And S(13) = 14</li>
</ol>

<p><strong>Therefore: 13 + 1 = 14. ∎</strong></p>


<h3>80. 13 + 2 = 15</h3>

<ol>
<li>2 = S(1), so 13 + 2 = 13 + S(1)</li>
<li>By rule (b): 13 + S(1) = S(13 + 1)</li>
<li>Since 13 + 1 = 14 (established arithmetic fact)</li>
<li>So S(13 + 1) = S(14)</li>
<li>And S(14) = 15</li>
</ol>

<p><strong>Therefore: 13 + 2 = 15. ∎</strong></p>


<h3>81. 13 + 3 = 16</h3>

<ol>
<li>3 = S(2), so 13 + 3 = 13 + S(2)</li>
<li>By rule (b): 13 + S(2) = S(13 + 2)</li>
<li>Since 13 + 2 = 15 (established arithmetic fact)</li>
<li>So S(13 + 2) = S(15)</li>
<li>And S(15) = 16</li>
</ol>

<p><strong>Therefore: 13 + 3 = 16. ∎</strong></p>


<h3>82. 13 + 4 = 17</h3>

<ol>
<li>4 = S(3), so 13 + 4 = 13 + S(3)</li>
<li>By rule (b): 13 + S(3) = S(13 + 3)</li>
<li>Since 13 + 3 = 16 (established arithmetic fact)</li>
<li>So S(13 + 3) = S(16)</li>
<li>And S(16) = 17</li>
</ol>

<p><strong>Therefore: 13 + 4 = 17. ∎</strong></p>


<h3>83. 13 + 5 = 18</h3>

<ol>
<li>5 = S(4), so 13 + 5 = 13 + S(4)</li>
<li>By rule (b): 13 + S(4) = S(13 + 4)</li>
<li>Since 13 + 4 = 17 (established arithmetic fact)</li>
<li>So S(13 + 4) = S(17)</li>
<li>And S(17) = 18</li>
</ol>

<p><strong>Therefore: 13 + 5 = 18. ∎</strong></p>


<h3>84. 13 + 6 = 19</h3>

<ol>
<li>6 = S(5), so 13 + 6 = 13 + S(5)</li>
<li>By rule (b): 13 + S(5) = S(13 + 5)</li>
<li>Since 13 + 5 = 18 (established arithmetic fact)</li>
<li>So S(13 + 5) = S(18)</li>
<li>And S(18) = 19</li>
</ol>

<p><strong>Therefore: 13 + 6 = 19. ∎</strong></p>


<h3>85. 13 + 7 = 20</h3>

<ol>
<li>7 = S(6), so 13 + 7 = 13 + S(6)</li>
<li>By rule (b): 13 + S(6) = S(13 + 6)</li>
<li>Since 13 + 6 = 19 (established arithmetic fact)</li>
<li>So S(13 + 6) = S(19)</li>
<li>And S(19) = 20</li>
</ol>

<p><strong>Therefore: 13 + 7 = 20. ∎</strong></p>


<h3>86. 13 + 8 = 21</h3>

<ol>
<li>8 = S(7), so 13 + 8 = 13 + S(7)</li>
<li>By rule (b): 13 + S(7) = S(13 + 7)</li>
<li>Since 13 + 7 = 20 (established arithmetic fact)</li>
<li>So S(13 + 7) = S(20)</li>
<li>And S(20) = 21</li>
</ol>

<p><strong>Therefore: 13 + 8 = 21. ∎</strong></p>


<h3>87. 13 + 9 = 22</h3>

<ol>
<li>9 = S(8), so 13 + 9 = 13 + S(8)</li>
<li>By rule (b): 13 + S(8) = S(13 + 8)</li>
<li>Since 13 + 8 = 21 (established arithmetic fact)</li>
<li>So S(13 + 8) = S(21)</li>
<li>And S(21) = 22</li>
</ol>

<p><strong>Therefore: 13 + 9 = 22. ∎</strong></p>


<h3>88. 13 + 10 = 23</h3>

<ol>
<li>10 = S(9), so 13 + 10 = 13 + S(9)</li>
<li>By rule (b): 13 + S(9) = S(13 + 9)</li>
<li>Since 13 + 9 = 22 (established arithmetic fact)</li>
<li>So S(13 + 9) = S(22)</li>
<li>And S(22) = 23</li>
</ol>

<p><strong>Therefore: 13 + 10 = 23. ∎</strong></p>


<h3>89. 13 + 11 = 24</h3>

<ol>
<li>11 = S(10), so 13 + 11 = 13 + S(10)</li>
<li>By rule (b): 13 + S(10) = S(13 + 10)</li>
<li>Since 13 + 10 = 23 (established arithmetic fact)</li>
<li>So S(13 + 10) = S(23)</li>
<li>And S(23) = 24</li>
</ol>

<p><strong>Therefore: 13 + 11 = 24. ∎</strong></p>


<h3>90. 13 + 12 = 25</h3>

<ol>
<li>12 = S(11), so 13 + 12 = 13 + S(11)</li>
<li>By rule (b): 13 + S(11) = S(13 + 11)</li>
<li>Since 13 + 11 = 24 (established arithmetic fact)</li>
<li>So S(13 + 11) = S(24)</li>
<li>And S(24) = 25</li>
</ol>

<p><strong>Therefore: 13 + 12 = 25. ∎</strong></p>


<h3>91. 13 + 13 = 26</h3>

<ol>
<li>13 = S(12), so 13 + 13 = 13 + S(12)</li>
<li>By rule (b): 13 + S(12) = S(13 + 12)</li>
<li>Since 13 + 12 = 25 (established arithmetic fact)</li>
<li>So S(13 + 12) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 13 + 13 = 26. ∎</strong></p>


<h3>92. 14 + 1 = 15</h3>

<ol>
<li>1 = S(0), so 14 + 1 = 14 + S(0)</li>
<li>By rule (b): 14 + S(0) = S(14 + 0)</li>
<li>Since 14 + 0 = 14 (established arithmetic fact)</li>
<li>So S(14 + 0) = S(14)</li>
<li>And S(14) = 15</li>
</ol>

<p><strong>Therefore: 14 + 1 = 15. ∎</strong></p>


<h3>93. 14 + 2 = 16</h3>

<ol>
<li>2 = S(1), so 14 + 2 = 14 + S(1)</li>
<li>By rule (b): 14 + S(1) = S(14 + 1)</li>
<li>Since 14 + 1 = 15 (established arithmetic fact)</li>
<li>So S(14 + 1) = S(15)</li>
<li>And S(15) = 16</li>
</ol>

<p><strong>Therefore: 14 + 2 = 16. ∎</strong></p>


<h3>94. 14 + 3 = 17</h3>

<ol>
<li>3 = S(2), so 14 + 3 = 14 + S(2)</li>
<li>By rule (b): 14 + S(2) = S(14 + 2)</li>
<li>Since 14 + 2 = 16 (established arithmetic fact)</li>
<li>So S(14 + 2) = S(16)</li>
<li>And S(16) = 17</li>
</ol>

<p><strong>Therefore: 14 + 3 = 17. ∎</strong></p>


<h3>95. 14 + 4 = 18</h3>

<ol>
<li>4 = S(3), so 14 + 4 = 14 + S(3)</li>
<li>By rule (b): 14 + S(3) = S(14 + 3)</li>
<li>Since 14 + 3 = 17 (established arithmetic fact)</li>
<li>So S(14 + 3) = S(17)</li>
<li>And S(17) = 18</li>
</ol>

<p><strong>Therefore: 14 + 4 = 18. ∎</strong></p>


<h3>96. 14 + 5 = 19</h3>

<ol>
<li>5 = S(4), so 14 + 5 = 14 + S(4)</li>
<li>By rule (b): 14 + S(4) = S(14 + 4)</li>
<li>Since 14 + 4 = 18 (established arithmetic fact)</li>
<li>So S(14 + 4) = S(18)</li>
<li>And S(18) = 19</li>
</ol>

<p><strong>Therefore: 14 + 5 = 19. ∎</strong></p>


<h3>97. 14 + 6 = 20</h3>

<ol>
<li>6 = S(5), so 14 + 6 = 14 + S(5)</li>
<li>By rule (b): 14 + S(5) = S(14 + 5)</li>
<li>Since 14 + 5 = 19 (established arithmetic fact)</li>
<li>So S(14 + 5) = S(19)</li>
<li>And S(19) = 20</li>
</ol>

<p><strong>Therefore: 14 + 6 = 20. ∎</strong></p>


<h3>98. 14 + 7 = 21</h3>

<ol>
<li>7 = S(6), so 14 + 7 = 14 + S(6)</li>
<li>By rule (b): 14 + S(6) = S(14 + 6)</li>
<li>Since 14 + 6 = 20 (established arithmetic fact)</li>
<li>So S(14 + 6) = S(20)</li>
<li>And S(20) = 21</li>
</ol>

<p><strong>Therefore: 14 + 7 = 21. ∎</strong></p>


<h3>99. 14 + 8 = 22</h3>

<ol>
<li>8 = S(7), so 14 + 8 = 14 + S(7)</li>
<li>By rule (b): 14 + S(7) = S(14 + 7)</li>
<li>Since 14 + 7 = 21 (established arithmetic fact)</li>
<li>So S(14 + 7) = S(21)</li>
<li>And S(21) = 22</li>
</ol>

<p><strong>Therefore: 14 + 8 = 22. ∎</strong></p>


<h3>100. 14 + 9 = 23</h3>

<ol>
<li>9 = S(8), so 14 + 9 = 14 + S(8)</li>
<li>By rule (b): 14 + S(8) = S(14 + 8)</li>
<li>Since 14 + 8 = 22 (established arithmetic fact)</li>
<li>So S(14 + 8) = S(22)</li>
<li>And S(22) = 23</li>
</ol>

<p><strong>Therefore: 14 + 9 = 23. ∎</strong></p>


<h3>101. 14 + 10 = 24</h3>

<ol>
<li>10 = S(9), so 14 + 10 = 14 + S(9)</li>
<li>By rule (b): 14 + S(9) = S(14 + 9)</li>
<li>Since 14 + 9 = 23 (established arithmetic fact)</li>
<li>So S(14 + 9) = S(23)</li>
<li>And S(23) = 24</li>
</ol>

<p><strong>Therefore: 14 + 10 = 24. ∎</strong></p>


<h3>102. 14 + 11 = 25</h3>

<ol>
<li>11 = S(10), so 14 + 11 = 14 + S(10)</li>
<li>By rule (b): 14 + S(10) = S(14 + 10)</li>
<li>Since 14 + 10 = 24 (established arithmetic fact)</li>
<li>So S(14 + 10) = S(24)</li>
<li>And S(24) = 25</li>
</ol>

<p><strong>Therefore: 14 + 11 = 25. ∎</strong></p>


<h3>103. 14 + 12 = 26</h3>

<ol>
<li>12 = S(11), so 14 + 12 = 14 + S(11)</li>
<li>By rule (b): 14 + S(11) = S(14 + 11)</li>
<li>Since 14 + 11 = 25 (established arithmetic fact)</li>
<li>So S(14 + 11) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 14 + 12 = 26. ∎</strong></p>


<h3>104. 14 + 13 = 27</h3>

<ol>
<li>13 = S(12), so 14 + 13 = 14 + S(12)</li>
<li>By rule (b): 14 + S(12) = S(14 + 12)</li>
<li>Since 14 + 12 = 26 (established arithmetic fact)</li>
<li>So S(14 + 12) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 14 + 13 = 27. ∎</strong></p>


<h3>105. 14 + 14 = 28</h3>

<ol>
<li>14 = S(13), so 14 + 14 = 14 + S(13)</li>
<li>By rule (b): 14 + S(13) = S(14 + 13)</li>
<li>Since 14 + 13 = 27 (established arithmetic fact)</li>
<li>So S(14 + 13) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 14 + 14 = 28. ∎</strong></p>


<h3>106. 15 + 1 = 16</h3>

<ol>
<li>1 = S(0), so 15 + 1 = 15 + S(0)</li>
<li>By rule (b): 15 + S(0) = S(15 + 0)</li>
<li>Since 15 + 0 = 15 (established arithmetic fact)</li>
<li>So S(15 + 0) = S(15)</li>
<li>And S(15) = 16</li>
</ol>

<p><strong>Therefore: 15 + 1 = 16. ∎</strong></p>


<h3>107. 15 + 2 = 17</h3>

<ol>
<li>2 = S(1), so 15 + 2 = 15 + S(1)</li>
<li>By rule (b): 15 + S(1) = S(15 + 1)</li>
<li>Since 15 + 1 = 16 (established arithmetic fact)</li>
<li>So S(15 + 1) = S(16)</li>
<li>And S(16) = 17</li>
</ol>

<p><strong>Therefore: 15 + 2 = 17. ∎</strong></p>


<h3>108. 15 + 3 = 18</h3>

<ol>
<li>3 = S(2), so 15 + 3 = 15 + S(2)</li>
<li>By rule (b): 15 + S(2) = S(15 + 2)</li>
<li>Since 15 + 2 = 17 (established arithmetic fact)</li>
<li>So S(15 + 2) = S(17)</li>
<li>And S(17) = 18</li>
</ol>

<p><strong>Therefore: 15 + 3 = 18. ∎</strong></p>


<h3>109. 15 + 4 = 19</h3>

<ol>
<li>4 = S(3), so 15 + 4 = 15 + S(3)</li>
<li>By rule (b): 15 + S(3) = S(15 + 3)</li>
<li>Since 15 + 3 = 18 (established arithmetic fact)</li>
<li>So S(15 + 3) = S(18)</li>
<li>And S(18) = 19</li>
</ol>

<p><strong>Therefore: 15 + 4 = 19. ∎</strong></p>


<h3>110. 15 + 5 = 20</h3>

<ol>
<li>5 = S(4), so 15 + 5 = 15 + S(4)</li>
<li>By rule (b): 15 + S(4) = S(15 + 4)</li>
<li>Since 15 + 4 = 19 (established arithmetic fact)</li>
<li>So S(15 + 4) = S(19)</li>
<li>And S(19) = 20</li>
</ol>

<p><strong>Therefore: 15 + 5 = 20. ∎</strong></p>


<h3>111. 15 + 6 = 21</h3>

<ol>
<li>6 = S(5), so 15 + 6 = 15 + S(5)</li>
<li>By rule (b): 15 + S(5) = S(15 + 5)</li>
<li>Since 15 + 5 = 20 (established arithmetic fact)</li>
<li>So S(15 + 5) = S(20)</li>
<li>And S(20) = 21</li>
</ol>

<p><strong>Therefore: 15 + 6 = 21. ∎</strong></p>


<h3>112. 15 + 7 = 22</h3>

<ol>
<li>7 = S(6), so 15 + 7 = 15 + S(6)</li>
<li>By rule (b): 15 + S(6) = S(15 + 6)</li>
<li>Since 15 + 6 = 21 (established arithmetic fact)</li>
<li>So S(15 + 6) = S(21)</li>
<li>And S(21) = 22</li>
</ol>

<p><strong>Therefore: 15 + 7 = 22. ∎</strong></p>


<h3>113. 15 + 8 = 23</h3>

<ol>
<li>8 = S(7), so 15 + 8 = 15 + S(7)</li>
<li>By rule (b): 15 + S(7) = S(15 + 7)</li>
<li>Since 15 + 7 = 22 (established arithmetic fact)</li>
<li>So S(15 + 7) = S(22)</li>
<li>And S(22) = 23</li>
</ol>

<p><strong>Therefore: 15 + 8 = 23. ∎</strong></p>


<h3>114. 15 + 9 = 24</h3>

<ol>
<li>9 = S(8), so 15 + 9 = 15 + S(8)</li>
<li>By rule (b): 15 + S(8) = S(15 + 8)</li>
<li>Since 15 + 8 = 23 (established arithmetic fact)</li>
<li>So S(15 + 8) = S(23)</li>
<li>And S(23) = 24</li>
</ol>

<p><strong>Therefore: 15 + 9 = 24. ∎</strong></p>


<h3>115. 15 + 10 = 25</h3>

<ol>
<li>10 = S(9), so 15 + 10 = 15 + S(9)</li>
<li>By rule (b): 15 + S(9) = S(15 + 9)</li>
<li>Since 15 + 9 = 24 (established arithmetic fact)</li>
<li>So S(15 + 9) = S(24)</li>
<li>And S(24) = 25</li>
</ol>

<p><strong>Therefore: 15 + 10 = 25. ∎</strong></p>


<h3>116. 15 + 11 = 26</h3>

<ol>
<li>11 = S(10), so 15 + 11 = 15 + S(10)</li>
<li>By rule (b): 15 + S(10) = S(15 + 10)</li>
<li>Since 15 + 10 = 25 (established arithmetic fact)</li>
<li>So S(15 + 10) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 15 + 11 = 26. ∎</strong></p>


<h3>117. 15 + 12 = 27</h3>

<ol>
<li>12 = S(11), so 15 + 12 = 15 + S(11)</li>
<li>By rule (b): 15 + S(11) = S(15 + 11)</li>
<li>Since 15 + 11 = 26 (established arithmetic fact)</li>
<li>So S(15 + 11) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 15 + 12 = 27. ∎</strong></p>


<h3>118. 15 + 13 = 28</h3>

<ol>
<li>13 = S(12), so 15 + 13 = 15 + S(12)</li>
<li>By rule (b): 15 + S(12) = S(15 + 12)</li>
<li>Since 15 + 12 = 27 (established arithmetic fact)</li>
<li>So S(15 + 12) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 15 + 13 = 28. ∎</strong></p>


<h3>119. 15 + 14 = 29</h3>

<ol>
<li>14 = S(13), so 15 + 14 = 15 + S(13)</li>
<li>By rule (b): 15 + S(13) = S(15 + 13)</li>
<li>Since 15 + 13 = 28 (established arithmetic fact)</li>
<li>So S(15 + 13) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 15 + 14 = 29. ∎</strong></p>


<h3>120. 15 + 15 = 30</h3>

<ol>
<li>15 = S(14), so 15 + 15 = 15 + S(14)</li>
<li>By rule (b): 15 + S(14) = S(15 + 14)</li>
<li>Since 15 + 14 = 29 (established arithmetic fact)</li>
<li>So S(15 + 14) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 15 + 15 = 30. ∎</strong></p>


<h3>121. 16 + 1 = 17</h3>

<ol>
<li>1 = S(0), so 16 + 1 = 16 + S(0)</li>
<li>By rule (b): 16 + S(0) = S(16 + 0)</li>
<li>Since 16 + 0 = 16 (established arithmetic fact)</li>
<li>So S(16 + 0) = S(16)</li>
<li>And S(16) = 17</li>
</ol>

<p><strong>Therefore: 16 + 1 = 17. ∎</strong></p>


<h3>122. 16 + 2 = 18</h3>

<ol>
<li>2 = S(1), so 16 + 2 = 16 + S(1)</li>
<li>By rule (b): 16 + S(1) = S(16 + 1)</li>
<li>Since 16 + 1 = 17 (established arithmetic fact)</li>
<li>So S(16 + 1) = S(17)</li>
<li>And S(17) = 18</li>
</ol>

<p><strong>Therefore: 16 + 2 = 18. ∎</strong></p>


<h3>123. 16 + 3 = 19</h3>

<ol>
<li>3 = S(2), so 16 + 3 = 16 + S(2)</li>
<li>By rule (b): 16 + S(2) = S(16 + 2)</li>
<li>Since 16 + 2 = 18 (established arithmetic fact)</li>
<li>So S(16 + 2) = S(18)</li>
<li>And S(18) = 19</li>
</ol>

<p><strong>Therefore: 16 + 3 = 19. ∎</strong></p>


<h3>124. 16 + 4 = 20</h3>

<ol>
<li>4 = S(3), so 16 + 4 = 16 + S(3)</li>
<li>By rule (b): 16 + S(3) = S(16 + 3)</li>
<li>Since 16 + 3 = 19 (established arithmetic fact)</li>
<li>So S(16 + 3) = S(19)</li>
<li>And S(19) = 20</li>
</ol>

<p><strong>Therefore: 16 + 4 = 20. ∎</strong></p>


<h3>125. 16 + 5 = 21</h3>

<ol>
<li>5 = S(4), so 16 + 5 = 16 + S(4)</li>
<li>By rule (b): 16 + S(4) = S(16 + 4)</li>
<li>Since 16 + 4 = 20 (established arithmetic fact)</li>
<li>So S(16 + 4) = S(20)</li>
<li>And S(20) = 21</li>
</ol>

<p><strong>Therefore: 16 + 5 = 21. ∎</strong></p>


<h3>126. 16 + 6 = 22</h3>

<ol>
<li>6 = S(5), so 16 + 6 = 16 + S(5)</li>
<li>By rule (b): 16 + S(5) = S(16 + 5)</li>
<li>Since 16 + 5 = 21 (established arithmetic fact)</li>
<li>So S(16 + 5) = S(21)</li>
<li>And S(21) = 22</li>
</ol>

<p><strong>Therefore: 16 + 6 = 22. ∎</strong></p>


<h3>127. 16 + 7 = 23</h3>

<ol>
<li>7 = S(6), so 16 + 7 = 16 + S(6)</li>
<li>By rule (b): 16 + S(6) = S(16 + 6)</li>
<li>Since 16 + 6 = 22 (established arithmetic fact)</li>
<li>So S(16 + 6) = S(22)</li>
<li>And S(22) = 23</li>
</ol>

<p><strong>Therefore: 16 + 7 = 23. ∎</strong></p>


<h3>128. 16 + 8 = 24</h3>

<ol>
<li>8 = S(7), so 16 + 8 = 16 + S(7)</li>
<li>By rule (b): 16 + S(7) = S(16 + 7)</li>
<li>Since 16 + 7 = 23 (established arithmetic fact)</li>
<li>So S(16 + 7) = S(23)</li>
<li>And S(23) = 24</li>
</ol>

<p><strong>Therefore: 16 + 8 = 24. ∎</strong></p>


<h3>129. 16 + 9 = 25</h3>

<ol>
<li>9 = S(8), so 16 + 9 = 16 + S(8)</li>
<li>By rule (b): 16 + S(8) = S(16 + 8)</li>
<li>Since 16 + 8 = 24 (established arithmetic fact)</li>
<li>So S(16 + 8) = S(24)</li>
<li>And S(24) = 25</li>
</ol>

<p><strong>Therefore: 16 + 9 = 25. ∎</strong></p>


<h3>130. 16 + 10 = 26</h3>

<ol>
<li>10 = S(9), so 16 + 10 = 16 + S(9)</li>
<li>By rule (b): 16 + S(9) = S(16 + 9)</li>
<li>Since 16 + 9 = 25 (established arithmetic fact)</li>
<li>So S(16 + 9) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 16 + 10 = 26. ∎</strong></p>


<h3>131. 16 + 11 = 27</h3>

<ol>
<li>11 = S(10), so 16 + 11 = 16 + S(10)</li>
<li>By rule (b): 16 + S(10) = S(16 + 10)</li>
<li>Since 16 + 10 = 26 (established arithmetic fact)</li>
<li>So S(16 + 10) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 16 + 11 = 27. ∎</strong></p>


<h3>132. 16 + 12 = 28</h3>

<ol>
<li>12 = S(11), so 16 + 12 = 16 + S(11)</li>
<li>By rule (b): 16 + S(11) = S(16 + 11)</li>
<li>Since 16 + 11 = 27 (established arithmetic fact)</li>
<li>So S(16 + 11) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 16 + 12 = 28. ∎</strong></p>


<h3>133. 16 + 13 = 29</h3>

<ol>
<li>13 = S(12), so 16 + 13 = 16 + S(12)</li>
<li>By rule (b): 16 + S(12) = S(16 + 12)</li>
<li>Since 16 + 12 = 28 (established arithmetic fact)</li>
<li>So S(16 + 12) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 16 + 13 = 29. ∎</strong></p>


<h3>134. 16 + 14 = 30</h3>

<ol>
<li>14 = S(13), so 16 + 14 = 16 + S(13)</li>
<li>By rule (b): 16 + S(13) = S(16 + 13)</li>
<li>Since 16 + 13 = 29 (established arithmetic fact)</li>
<li>So S(16 + 13) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 16 + 14 = 30. ∎</strong></p>


<h3>135. 16 + 15 = 31</h3>

<ol>
<li>15 = S(14), so 16 + 15 = 16 + S(14)</li>
<li>By rule (b): 16 + S(14) = S(16 + 14)</li>
<li>Since 16 + 14 = 30 (established arithmetic fact)</li>
<li>So S(16 + 14) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 16 + 15 = 31. ∎</strong></p>


<h3>136. 16 + 16 = 32</h3>

<ol>
<li>16 = S(15), so 16 + 16 = 16 + S(15)</li>
<li>By rule (b): 16 + S(15) = S(16 + 15)</li>
<li>Since 16 + 15 = 31 (established arithmetic fact)</li>
<li>So S(16 + 15) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 16 + 16 = 32. ∎</strong></p>


<h3>137. 17 + 1 = 18</h3>

<ol>
<li>1 = S(0), so 17 + 1 = 17 + S(0)</li>
<li>By rule (b): 17 + S(0) = S(17 + 0)</li>
<li>Since 17 + 0 = 17 (established arithmetic fact)</li>
<li>So S(17 + 0) = S(17)</li>
<li>And S(17) = 18</li>
</ol>

<p><strong>Therefore: 17 + 1 = 18. ∎</strong></p>


<h3>138. 17 + 2 = 19</h3>

<ol>
<li>2 = S(1), so 17 + 2 = 17 + S(1)</li>
<li>By rule (b): 17 + S(1) = S(17 + 1)</li>
<li>Since 17 + 1 = 18 (established arithmetic fact)</li>
<li>So S(17 + 1) = S(18)</li>
<li>And S(18) = 19</li>
</ol>

<p><strong>Therefore: 17 + 2 = 19. ∎</strong></p>


<h3>139. 17 + 3 = 20</h3>

<ol>
<li>3 = S(2), so 17 + 3 = 17 + S(2)</li>
<li>By rule (b): 17 + S(2) = S(17 + 2)</li>
<li>Since 17 + 2 = 19 (established arithmetic fact)</li>
<li>So S(17 + 2) = S(19)</li>
<li>And S(19) = 20</li>
</ol>

<p><strong>Therefore: 17 + 3 = 20. ∎</strong></p>


<h3>140. 17 + 4 = 21</h3>

<ol>
<li>4 = S(3), so 17 + 4 = 17 + S(3)</li>
<li>By rule (b): 17 + S(3) = S(17 + 3)</li>
<li>Since 17 + 3 = 20 (established arithmetic fact)</li>
<li>So S(17 + 3) = S(20)</li>
<li>And S(20) = 21</li>
</ol>

<p><strong>Therefore: 17 + 4 = 21. ∎</strong></p>


<h3>141. 17 + 5 = 22</h3>

<ol>
<li>5 = S(4), so 17 + 5 = 17 + S(4)</li>
<li>By rule (b): 17 + S(4) = S(17 + 4)</li>
<li>Since 17 + 4 = 21 (established arithmetic fact)</li>
<li>So S(17 + 4) = S(21)</li>
<li>And S(21) = 22</li>
</ol>

<p><strong>Therefore: 17 + 5 = 22. ∎</strong></p>


<h3>142. 17 + 6 = 23</h3>

<ol>
<li>6 = S(5), so 17 + 6 = 17 + S(5)</li>
<li>By rule (b): 17 + S(5) = S(17 + 5)</li>
<li>Since 17 + 5 = 22 (established arithmetic fact)</li>
<li>So S(17 + 5) = S(22)</li>
<li>And S(22) = 23</li>
</ol>

<p><strong>Therefore: 17 + 6 = 23. ∎</strong></p>


<h3>143. 17 + 7 = 24</h3>

<ol>
<li>7 = S(6), so 17 + 7 = 17 + S(6)</li>
<li>By rule (b): 17 + S(6) = S(17 + 6)</li>
<li>Since 17 + 6 = 23 (established arithmetic fact)</li>
<li>So S(17 + 6) = S(23)</li>
<li>And S(23) = 24</li>
</ol>

<p><strong>Therefore: 17 + 7 = 24. ∎</strong></p>


<h3>144. 17 + 8 = 25</h3>

<ol>
<li>8 = S(7), so 17 + 8 = 17 + S(7)</li>
<li>By rule (b): 17 + S(7) = S(17 + 7)</li>
<li>Since 17 + 7 = 24 (established arithmetic fact)</li>
<li>So S(17 + 7) = S(24)</li>
<li>And S(24) = 25</li>
</ol>

<p><strong>Therefore: 17 + 8 = 25. ∎</strong></p>


<h3>145. 17 + 9 = 26</h3>

<ol>
<li>9 = S(8), so 17 + 9 = 17 + S(8)</li>
<li>By rule (b): 17 + S(8) = S(17 + 8)</li>
<li>Since 17 + 8 = 25 (established arithmetic fact)</li>
<li>So S(17 + 8) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 17 + 9 = 26. ∎</strong></p>


<h3>146. 17 + 10 = 27</h3>

<ol>
<li>10 = S(9), so 17 + 10 = 17 + S(9)</li>
<li>By rule (b): 17 + S(9) = S(17 + 9)</li>
<li>Since 17 + 9 = 26 (established arithmetic fact)</li>
<li>So S(17 + 9) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 17 + 10 = 27. ∎</strong></p>


<h3>147. 17 + 11 = 28</h3>

<ol>
<li>11 = S(10), so 17 + 11 = 17 + S(10)</li>
<li>By rule (b): 17 + S(10) = S(17 + 10)</li>
<li>Since 17 + 10 = 27 (established arithmetic fact)</li>
<li>So S(17 + 10) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 17 + 11 = 28. ∎</strong></p>


<h3>148. 17 + 12 = 29</h3>

<ol>
<li>12 = S(11), so 17 + 12 = 17 + S(11)</li>
<li>By rule (b): 17 + S(11) = S(17 + 11)</li>
<li>Since 17 + 11 = 28 (established arithmetic fact)</li>
<li>So S(17 + 11) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 17 + 12 = 29. ∎</strong></p>


<h3>149. 17 + 13 = 30</h3>

<ol>
<li>13 = S(12), so 17 + 13 = 17 + S(12)</li>
<li>By rule (b): 17 + S(12) = S(17 + 12)</li>
<li>Since 17 + 12 = 29 (established arithmetic fact)</li>
<li>So S(17 + 12) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 17 + 13 = 30. ∎</strong></p>


<h3>150. 17 + 14 = 31</h3>

<ol>
<li>14 = S(13), so 17 + 14 = 17 + S(13)</li>
<li>By rule (b): 17 + S(13) = S(17 + 13)</li>
<li>Since 17 + 13 = 30 (established arithmetic fact)</li>
<li>So S(17 + 13) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 17 + 14 = 31. ∎</strong></p>


<h3>151. 17 + 15 = 32</h3>

<ol>
<li>15 = S(14), so 17 + 15 = 17 + S(14)</li>
<li>By rule (b): 17 + S(14) = S(17 + 14)</li>
<li>Since 17 + 14 = 31 (established arithmetic fact)</li>
<li>So S(17 + 14) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 17 + 15 = 32. ∎</strong></p>


<h3>152. 17 + 16 = 33</h3>

<ol>
<li>16 = S(15), so 17 + 16 = 17 + S(15)</li>
<li>By rule (b): 17 + S(15) = S(17 + 15)</li>
<li>Since 17 + 15 = 32 (established arithmetic fact)</li>
<li>So S(17 + 15) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 17 + 16 = 33. ∎</strong></p>


<h3>153. 17 + 17 = 34</h3>

<ol>
<li>17 = S(16), so 17 + 17 = 17 + S(16)</li>
<li>By rule (b): 17 + S(16) = S(17 + 16)</li>
<li>Since 17 + 16 = 33 (established arithmetic fact)</li>
<li>So S(17 + 16) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 17 + 17 = 34. ∎</strong></p>


<h3>154. 18 + 1 = 19</h3>

<ol>
<li>1 = S(0), so 18 + 1 = 18 + S(0)</li>
<li>By rule (b): 18 + S(0) = S(18 + 0)</li>
<li>Since 18 + 0 = 18 (established arithmetic fact)</li>
<li>So S(18 + 0) = S(18)</li>
<li>And S(18) = 19</li>
</ol>

<p><strong>Therefore: 18 + 1 = 19. ∎</strong></p>


<h3>155. 18 + 2 = 20</h3>

<ol>
<li>2 = S(1), so 18 + 2 = 18 + S(1)</li>
<li>By rule (b): 18 + S(1) = S(18 + 1)</li>
<li>Since 18 + 1 = 19 (established arithmetic fact)</li>
<li>So S(18 + 1) = S(19)</li>
<li>And S(19) = 20</li>
</ol>

<p><strong>Therefore: 18 + 2 = 20. ∎</strong></p>


<h3>156. 18 + 3 = 21</h3>

<ol>
<li>3 = S(2), so 18 + 3 = 18 + S(2)</li>
<li>By rule (b): 18 + S(2) = S(18 + 2)</li>
<li>Since 18 + 2 = 20 (established arithmetic fact)</li>
<li>So S(18 + 2) = S(20)</li>
<li>And S(20) = 21</li>
</ol>

<p><strong>Therefore: 18 + 3 = 21. ∎</strong></p>


<h3>157. 18 + 4 = 22</h3>

<ol>
<li>4 = S(3), so 18 + 4 = 18 + S(3)</li>
<li>By rule (b): 18 + S(3) = S(18 + 3)</li>
<li>Since 18 + 3 = 21 (established arithmetic fact)</li>
<li>So S(18 + 3) = S(21)</li>
<li>And S(21) = 22</li>
</ol>

<p><strong>Therefore: 18 + 4 = 22. ∎</strong></p>


<h3>158. 18 + 5 = 23</h3>

<ol>
<li>5 = S(4), so 18 + 5 = 18 + S(4)</li>
<li>By rule (b): 18 + S(4) = S(18 + 4)</li>
<li>Since 18 + 4 = 22 (established arithmetic fact)</li>
<li>So S(18 + 4) = S(22)</li>
<li>And S(22) = 23</li>
</ol>

<p><strong>Therefore: 18 + 5 = 23. ∎</strong></p>


<h3>159. 18 + 6 = 24</h3>

<ol>
<li>6 = S(5), so 18 + 6 = 18 + S(5)</li>
<li>By rule (b): 18 + S(5) = S(18 + 5)</li>
<li>Since 18 + 5 = 23 (established arithmetic fact)</li>
<li>So S(18 + 5) = S(23)</li>
<li>And S(23) = 24</li>
</ol>

<p><strong>Therefore: 18 + 6 = 24. ∎</strong></p>


<h3>160. 18 + 7 = 25</h3>

<ol>
<li>7 = S(6), so 18 + 7 = 18 + S(6)</li>
<li>By rule (b): 18 + S(6) = S(18 + 6)</li>
<li>Since 18 + 6 = 24 (established arithmetic fact)</li>
<li>So S(18 + 6) = S(24)</li>
<li>And S(24) = 25</li>
</ol>

<p><strong>Therefore: 18 + 7 = 25. ∎</strong></p>


<h3>161. 18 + 8 = 26</h3>

<ol>
<li>8 = S(7), so 18 + 8 = 18 + S(7)</li>
<li>By rule (b): 18 + S(7) = S(18 + 7)</li>
<li>Since 18 + 7 = 25 (established arithmetic fact)</li>
<li>So S(18 + 7) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 18 + 8 = 26. ∎</strong></p>


<h3>162. 18 + 9 = 27</h3>

<ol>
<li>9 = S(8), so 18 + 9 = 18 + S(8)</li>
<li>By rule (b): 18 + S(8) = S(18 + 8)</li>
<li>Since 18 + 8 = 26 (established arithmetic fact)</li>
<li>So S(18 + 8) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 18 + 9 = 27. ∎</strong></p>


<h3>163. 18 + 10 = 28</h3>

<ol>
<li>10 = S(9), so 18 + 10 = 18 + S(9)</li>
<li>By rule (b): 18 + S(9) = S(18 + 9)</li>
<li>Since 18 + 9 = 27 (established arithmetic fact)</li>
<li>So S(18 + 9) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 18 + 10 = 28. ∎</strong></p>


<h3>164. 18 + 11 = 29</h3>

<ol>
<li>11 = S(10), so 18 + 11 = 18 + S(10)</li>
<li>By rule (b): 18 + S(10) = S(18 + 10)</li>
<li>Since 18 + 10 = 28 (established arithmetic fact)</li>
<li>So S(18 + 10) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 18 + 11 = 29. ∎</strong></p>


<h3>165. 18 + 12 = 30</h3>

<ol>
<li>12 = S(11), so 18 + 12 = 18 + S(11)</li>
<li>By rule (b): 18 + S(11) = S(18 + 11)</li>
<li>Since 18 + 11 = 29 (established arithmetic fact)</li>
<li>So S(18 + 11) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 18 + 12 = 30. ∎</strong></p>


<h3>166. 18 + 13 = 31</h3>

<ol>
<li>13 = S(12), so 18 + 13 = 18 + S(12)</li>
<li>By rule (b): 18 + S(12) = S(18 + 12)</li>
<li>Since 18 + 12 = 30 (established arithmetic fact)</li>
<li>So S(18 + 12) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 18 + 13 = 31. ∎</strong></p>


<h3>167. 18 + 14 = 32</h3>

<ol>
<li>14 = S(13), so 18 + 14 = 18 + S(13)</li>
<li>By rule (b): 18 + S(13) = S(18 + 13)</li>
<li>Since 18 + 13 = 31 (established arithmetic fact)</li>
<li>So S(18 + 13) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 18 + 14 = 32. ∎</strong></p>


<h3>168. 18 + 15 = 33</h3>

<ol>
<li>15 = S(14), so 18 + 15 = 18 + S(14)</li>
<li>By rule (b): 18 + S(14) = S(18 + 14)</li>
<li>Since 18 + 14 = 32 (established arithmetic fact)</li>
<li>So S(18 + 14) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 18 + 15 = 33. ∎</strong></p>


<h3>169. 18 + 16 = 34</h3>

<ol>
<li>16 = S(15), so 18 + 16 = 18 + S(15)</li>
<li>By rule (b): 18 + S(15) = S(18 + 15)</li>
<li>Since 18 + 15 = 33 (established arithmetic fact)</li>
<li>So S(18 + 15) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 18 + 16 = 34. ∎</strong></p>


<h3>170. 18 + 17 = 35</h3>

<ol>
<li>17 = S(16), so 18 + 17 = 18 + S(16)</li>
<li>By rule (b): 18 + S(16) = S(18 + 16)</li>
<li>Since 18 + 16 = 34 (established arithmetic fact)</li>
<li>So S(18 + 16) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 18 + 17 = 35. ∎</strong></p>


<h3>171. 18 + 18 = 36</h3>

<ol>
<li>18 = S(17), so 18 + 18 = 18 + S(17)</li>
<li>By rule (b): 18 + S(17) = S(18 + 17)</li>
<li>Since 18 + 17 = 35 (established arithmetic fact)</li>
<li>So S(18 + 17) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 18 + 18 = 36. ∎</strong></p>


<h3>172. 19 + 1 = 20</h3>

<ol>
<li>1 = S(0), so 19 + 1 = 19 + S(0)</li>
<li>By rule (b): 19 + S(0) = S(19 + 0)</li>
<li>Since 19 + 0 = 19 (established arithmetic fact)</li>
<li>So S(19 + 0) = S(19)</li>
<li>And S(19) = 20</li>
</ol>

<p><strong>Therefore: 19 + 1 = 20. ∎</strong></p>


<h3>173. 19 + 2 = 21</h3>

<ol>
<li>2 = S(1), so 19 + 2 = 19 + S(1)</li>
<li>By rule (b): 19 + S(1) = S(19 + 1)</li>
<li>Since 19 + 1 = 20 (established arithmetic fact)</li>
<li>So S(19 + 1) = S(20)</li>
<li>And S(20) = 21</li>
</ol>

<p><strong>Therefore: 19 + 2 = 21. ∎</strong></p>


<h3>174. 19 + 3 = 22</h3>

<ol>
<li>3 = S(2), so 19 + 3 = 19 + S(2)</li>
<li>By rule (b): 19 + S(2) = S(19 + 2)</li>
<li>Since 19 + 2 = 21 (established arithmetic fact)</li>
<li>So S(19 + 2) = S(21)</li>
<li>And S(21) = 22</li>
</ol>

<p><strong>Therefore: 19 + 3 = 22. ∎</strong></p>


<h3>175. 19 + 4 = 23</h3>

<ol>
<li>4 = S(3), so 19 + 4 = 19 + S(3)</li>
<li>By rule (b): 19 + S(3) = S(19 + 3)</li>
<li>Since 19 + 3 = 22 (established arithmetic fact)</li>
<li>So S(19 + 3) = S(22)</li>
<li>And S(22) = 23</li>
</ol>

<p><strong>Therefore: 19 + 4 = 23. ∎</strong></p>


<h3>176. 19 + 5 = 24</h3>

<ol>
<li>5 = S(4), so 19 + 5 = 19 + S(4)</li>
<li>By rule (b): 19 + S(4) = S(19 + 4)</li>
<li>Since 19 + 4 = 23 (established arithmetic fact)</li>
<li>So S(19 + 4) = S(23)</li>
<li>And S(23) = 24</li>
</ol>

<p><strong>Therefore: 19 + 5 = 24. ∎</strong></p>


<h3>177. 19 + 6 = 25</h3>

<ol>
<li>6 = S(5), so 19 + 6 = 19 + S(5)</li>
<li>By rule (b): 19 + S(5) = S(19 + 5)</li>
<li>Since 19 + 5 = 24 (established arithmetic fact)</li>
<li>So S(19 + 5) = S(24)</li>
<li>And S(24) = 25</li>
</ol>

<p><strong>Therefore: 19 + 6 = 25. ∎</strong></p>


<h3>178. 19 + 7 = 26</h3>

<ol>
<li>7 = S(6), so 19 + 7 = 19 + S(6)</li>
<li>By rule (b): 19 + S(6) = S(19 + 6)</li>
<li>Since 19 + 6 = 25 (established arithmetic fact)</li>
<li>So S(19 + 6) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 19 + 7 = 26. ∎</strong></p>


<h3>179. 19 + 8 = 27</h3>

<ol>
<li>8 = S(7), so 19 + 8 = 19 + S(7)</li>
<li>By rule (b): 19 + S(7) = S(19 + 7)</li>
<li>Since 19 + 7 = 26 (established arithmetic fact)</li>
<li>So S(19 + 7) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 19 + 8 = 27. ∎</strong></p>


<h3>180. 19 + 9 = 28</h3>

<ol>
<li>9 = S(8), so 19 + 9 = 19 + S(8)</li>
<li>By rule (b): 19 + S(8) = S(19 + 8)</li>
<li>Since 19 + 8 = 27 (established arithmetic fact)</li>
<li>So S(19 + 8) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 19 + 9 = 28. ∎</strong></p>


<h3>181. 19 + 10 = 29</h3>

<ol>
<li>10 = S(9), so 19 + 10 = 19 + S(9)</li>
<li>By rule (b): 19 + S(9) = S(19 + 9)</li>
<li>Since 19 + 9 = 28 (established arithmetic fact)</li>
<li>So S(19 + 9) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 19 + 10 = 29. ∎</strong></p>


<h3>182. 19 + 11 = 30</h3>

<ol>
<li>11 = S(10), so 19 + 11 = 19 + S(10)</li>
<li>By rule (b): 19 + S(10) = S(19 + 10)</li>
<li>Since 19 + 10 = 29 (established arithmetic fact)</li>
<li>So S(19 + 10) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 19 + 11 = 30. ∎</strong></p>


<h3>183. 19 + 12 = 31</h3>

<ol>
<li>12 = S(11), so 19 + 12 = 19 + S(11)</li>
<li>By rule (b): 19 + S(11) = S(19 + 11)</li>
<li>Since 19 + 11 = 30 (established arithmetic fact)</li>
<li>So S(19 + 11) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 19 + 12 = 31. ∎</strong></p>


<h3>184. 19 + 13 = 32</h3>

<ol>
<li>13 = S(12), so 19 + 13 = 19 + S(12)</li>
<li>By rule (b): 19 + S(12) = S(19 + 12)</li>
<li>Since 19 + 12 = 31 (established arithmetic fact)</li>
<li>So S(19 + 12) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 19 + 13 = 32. ∎</strong></p>


<h3>185. 19 + 14 = 33</h3>

<ol>
<li>14 = S(13), so 19 + 14 = 19 + S(13)</li>
<li>By rule (b): 19 + S(13) = S(19 + 13)</li>
<li>Since 19 + 13 = 32 (established arithmetic fact)</li>
<li>So S(19 + 13) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 19 + 14 = 33. ∎</strong></p>


<h3>186. 19 + 15 = 34</h3>

<ol>
<li>15 = S(14), so 19 + 15 = 19 + S(14)</li>
<li>By rule (b): 19 + S(14) = S(19 + 14)</li>
<li>Since 19 + 14 = 33 (established arithmetic fact)</li>
<li>So S(19 + 14) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 19 + 15 = 34. ∎</strong></p>


<h3>187. 19 + 16 = 35</h3>

<ol>
<li>16 = S(15), so 19 + 16 = 19 + S(15)</li>
<li>By rule (b): 19 + S(15) = S(19 + 15)</li>
<li>Since 19 + 15 = 34 (established arithmetic fact)</li>
<li>So S(19 + 15) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 19 + 16 = 35. ∎</strong></p>


<h3>188. 19 + 17 = 36</h3>

<ol>
<li>17 = S(16), so 19 + 17 = 19 + S(16)</li>
<li>By rule (b): 19 + S(16) = S(19 + 16)</li>
<li>Since 19 + 16 = 35 (established arithmetic fact)</li>
<li>So S(19 + 16) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 19 + 17 = 36. ∎</strong></p>


<h3>189. 19 + 18 = 37</h3>

<ol>
<li>18 = S(17), so 19 + 18 = 19 + S(17)</li>
<li>By rule (b): 19 + S(17) = S(19 + 17)</li>
<li>Since 19 + 17 = 36 (established arithmetic fact)</li>
<li>So S(19 + 17) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 19 + 18 = 37. ∎</strong></p>


<h3>190. 19 + 19 = 38</h3>

<ol>
<li>19 = S(18), so 19 + 19 = 19 + S(18)</li>
<li>By rule (b): 19 + S(18) = S(19 + 18)</li>
<li>Since 19 + 18 = 37 (established arithmetic fact)</li>
<li>So S(19 + 18) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 19 + 19 = 38. ∎</strong></p>


<h3>191. 20 + 1 = 21</h3>

<ol>
<li>1 = S(0), so 20 + 1 = 20 + S(0)</li>
<li>By rule (b): 20 + S(0) = S(20 + 0)</li>
<li>Since 20 + 0 = 20 (established arithmetic fact)</li>
<li>So S(20 + 0) = S(20)</li>
<li>And S(20) = 21</li>
</ol>

<p><strong>Therefore: 20 + 1 = 21. ∎</strong></p>


<h3>192. 20 + 2 = 22</h3>

<ol>
<li>2 = S(1), so 20 + 2 = 20 + S(1)</li>
<li>By rule (b): 20 + S(1) = S(20 + 1)</li>
<li>Since 20 + 1 = 21 (established arithmetic fact)</li>
<li>So S(20 + 1) = S(21)</li>
<li>And S(21) = 22</li>
</ol>

<p><strong>Therefore: 20 + 2 = 22. ∎</strong></p>


<h3>193. 20 + 3 = 23</h3>

<ol>
<li>3 = S(2), so 20 + 3 = 20 + S(2)</li>
<li>By rule (b): 20 + S(2) = S(20 + 2)</li>
<li>Since 20 + 2 = 22 (established arithmetic fact)</li>
<li>So S(20 + 2) = S(22)</li>
<li>And S(22) = 23</li>
</ol>

<p><strong>Therefore: 20 + 3 = 23. ∎</strong></p>


<h3>194. 20 + 4 = 24</h3>

<ol>
<li>4 = S(3), so 20 + 4 = 20 + S(3)</li>
<li>By rule (b): 20 + S(3) = S(20 + 3)</li>
<li>Since 20 + 3 = 23 (established arithmetic fact)</li>
<li>So S(20 + 3) = S(23)</li>
<li>And S(23) = 24</li>
</ol>

<p><strong>Therefore: 20 + 4 = 24. ∎</strong></p>


<h3>195. 20 + 5 = 25</h3>

<ol>
<li>5 = S(4), so 20 + 5 = 20 + S(4)</li>
<li>By rule (b): 20 + S(4) = S(20 + 4)</li>
<li>Since 20 + 4 = 24 (established arithmetic fact)</li>
<li>So S(20 + 4) = S(24)</li>
<li>And S(24) = 25</li>
</ol>

<p><strong>Therefore: 20 + 5 = 25. ∎</strong></p>


<h3>196. 20 + 6 = 26</h3>

<ol>
<li>6 = S(5), so 20 + 6 = 20 + S(5)</li>
<li>By rule (b): 20 + S(5) = S(20 + 5)</li>
<li>Since 20 + 5 = 25 (established arithmetic fact)</li>
<li>So S(20 + 5) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 20 + 6 = 26. ∎</strong></p>


<h3>197. 20 + 7 = 27</h3>

<ol>
<li>7 = S(6), so 20 + 7 = 20 + S(6)</li>
<li>By rule (b): 20 + S(6) = S(20 + 6)</li>
<li>Since 20 + 6 = 26 (established arithmetic fact)</li>
<li>So S(20 + 6) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 20 + 7 = 27. ∎</strong></p>


<h3>198. 20 + 8 = 28</h3>

<ol>
<li>8 = S(7), so 20 + 8 = 20 + S(7)</li>
<li>By rule (b): 20 + S(7) = S(20 + 7)</li>
<li>Since 20 + 7 = 27 (established arithmetic fact)</li>
<li>So S(20 + 7) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 20 + 8 = 28. ∎</strong></p>


<h3>199. 20 + 9 = 29</h3>

<ol>
<li>9 = S(8), so 20 + 9 = 20 + S(8)</li>
<li>By rule (b): 20 + S(8) = S(20 + 8)</li>
<li>Since 20 + 8 = 28 (established arithmetic fact)</li>
<li>So S(20 + 8) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 20 + 9 = 29. ∎</strong></p>


<h3>200. 20 + 10 = 30</h3>

<ol>
<li>10 = S(9), so 20 + 10 = 20 + S(9)</li>
<li>By rule (b): 20 + S(9) = S(20 + 9)</li>
<li>Since 20 + 9 = 29 (established arithmetic fact)</li>
<li>So S(20 + 9) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 20 + 10 = 30. ∎</strong></p>


<h3>201. 20 + 11 = 31</h3>

<ol>
<li>11 = S(10), so 20 + 11 = 20 + S(10)</li>
<li>By rule (b): 20 + S(10) = S(20 + 10)</li>
<li>Since 20 + 10 = 30 (established arithmetic fact)</li>
<li>So S(20 + 10) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 20 + 11 = 31. ∎</strong></p>


<h3>202. 20 + 12 = 32</h3>

<ol>
<li>12 = S(11), so 20 + 12 = 20 + S(11)</li>
<li>By rule (b): 20 + S(11) = S(20 + 11)</li>
<li>Since 20 + 11 = 31 (established arithmetic fact)</li>
<li>So S(20 + 11) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 20 + 12 = 32. ∎</strong></p>


<h3>203. 20 + 13 = 33</h3>

<ol>
<li>13 = S(12), so 20 + 13 = 20 + S(12)</li>
<li>By rule (b): 20 + S(12) = S(20 + 12)</li>
<li>Since 20 + 12 = 32 (established arithmetic fact)</li>
<li>So S(20 + 12) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 20 + 13 = 33. ∎</strong></p>


<h3>204. 20 + 14 = 34</h3>

<ol>
<li>14 = S(13), so 20 + 14 = 20 + S(13)</li>
<li>By rule (b): 20 + S(13) = S(20 + 13)</li>
<li>Since 20 + 13 = 33 (established arithmetic fact)</li>
<li>So S(20 + 13) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 20 + 14 = 34. ∎</strong></p>


<h3>205. 20 + 15 = 35</h3>

<ol>
<li>15 = S(14), so 20 + 15 = 20 + S(14)</li>
<li>By rule (b): 20 + S(14) = S(20 + 14)</li>
<li>Since 20 + 14 = 34 (established arithmetic fact)</li>
<li>So S(20 + 14) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 20 + 15 = 35. ∎</strong></p>


<h3>206. 20 + 16 = 36</h3>

<ol>
<li>16 = S(15), so 20 + 16 = 20 + S(15)</li>
<li>By rule (b): 20 + S(15) = S(20 + 15)</li>
<li>Since 20 + 15 = 35 (established arithmetic fact)</li>
<li>So S(20 + 15) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 20 + 16 = 36. ∎</strong></p>


<h3>207. 20 + 17 = 37</h3>

<ol>
<li>17 = S(16), so 20 + 17 = 20 + S(16)</li>
<li>By rule (b): 20 + S(16) = S(20 + 16)</li>
<li>Since 20 + 16 = 36 (established arithmetic fact)</li>
<li>So S(20 + 16) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 20 + 17 = 37. ∎</strong></p>


<h3>208. 20 + 18 = 38</h3>

<ol>
<li>18 = S(17), so 20 + 18 = 20 + S(17)</li>
<li>By rule (b): 20 + S(17) = S(20 + 17)</li>
<li>Since 20 + 17 = 37 (established arithmetic fact)</li>
<li>So S(20 + 17) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 20 + 18 = 38. ∎</strong></p>


<h3>209. 20 + 19 = 39</h3>

<ol>
<li>19 = S(18), so 20 + 19 = 20 + S(18)</li>
<li>By rule (b): 20 + S(18) = S(20 + 18)</li>
<li>Since 20 + 18 = 38 (established arithmetic fact)</li>
<li>So S(20 + 18) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 20 + 19 = 39. ∎</strong></p>


<h3>210. 20 + 20 = 40</h3>

<ol>
<li>20 = S(19), so 20 + 20 = 20 + S(19)</li>
<li>By rule (b): 20 + S(19) = S(20 + 19)</li>
<li>Since 20 + 19 = 39 (established arithmetic fact)</li>
<li>So S(20 + 19) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 20 + 20 = 40. ∎</strong></p>


<h3>211. 21 + 1 = 22</h3>

<ol>
<li>1 = S(0), so 21 + 1 = 21 + S(0)</li>
<li>By rule (b): 21 + S(0) = S(21 + 0)</li>
<li>Since 21 + 0 = 21 (established arithmetic fact)</li>
<li>So S(21 + 0) = S(21)</li>
<li>And S(21) = 22</li>
</ol>

<p><strong>Therefore: 21 + 1 = 22. ∎</strong></p>


<h3>212. 21 + 2 = 23</h3>

<ol>
<li>2 = S(1), so 21 + 2 = 21 + S(1)</li>
<li>By rule (b): 21 + S(1) = S(21 + 1)</li>
<li>Since 21 + 1 = 22 (established arithmetic fact)</li>
<li>So S(21 + 1) = S(22)</li>
<li>And S(22) = 23</li>
</ol>

<p><strong>Therefore: 21 + 2 = 23. ∎</strong></p>


<h3>213. 21 + 3 = 24</h3>

<ol>
<li>3 = S(2), so 21 + 3 = 21 + S(2)</li>
<li>By rule (b): 21 + S(2) = S(21 + 2)</li>
<li>Since 21 + 2 = 23 (established arithmetic fact)</li>
<li>So S(21 + 2) = S(23)</li>
<li>And S(23) = 24</li>
</ol>

<p><strong>Therefore: 21 + 3 = 24. ∎</strong></p>


<h3>214. 21 + 4 = 25</h3>

<ol>
<li>4 = S(3), so 21 + 4 = 21 + S(3)</li>
<li>By rule (b): 21 + S(3) = S(21 + 3)</li>
<li>Since 21 + 3 = 24 (established arithmetic fact)</li>
<li>So S(21 + 3) = S(24)</li>
<li>And S(24) = 25</li>
</ol>

<p><strong>Therefore: 21 + 4 = 25. ∎</strong></p>


<h3>215. 21 + 5 = 26</h3>

<ol>
<li>5 = S(4), so 21 + 5 = 21 + S(4)</li>
<li>By rule (b): 21 + S(4) = S(21 + 4)</li>
<li>Since 21 + 4 = 25 (established arithmetic fact)</li>
<li>So S(21 + 4) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 21 + 5 = 26. ∎</strong></p>


<h3>216. 21 + 6 = 27</h3>

<ol>
<li>6 = S(5), so 21 + 6 = 21 + S(5)</li>
<li>By rule (b): 21 + S(5) = S(21 + 5)</li>
<li>Since 21 + 5 = 26 (established arithmetic fact)</li>
<li>So S(21 + 5) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 21 + 6 = 27. ∎</strong></p>


<h3>217. 21 + 7 = 28</h3>

<ol>
<li>7 = S(6), so 21 + 7 = 21 + S(6)</li>
<li>By rule (b): 21 + S(6) = S(21 + 6)</li>
<li>Since 21 + 6 = 27 (established arithmetic fact)</li>
<li>So S(21 + 6) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 21 + 7 = 28. ∎</strong></p>


<h3>218. 21 + 8 = 29</h3>

<ol>
<li>8 = S(7), so 21 + 8 = 21 + S(7)</li>
<li>By rule (b): 21 + S(7) = S(21 + 7)</li>
<li>Since 21 + 7 = 28 (established arithmetic fact)</li>
<li>So S(21 + 7) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 21 + 8 = 29. ∎</strong></p>


<h3>219. 21 + 9 = 30</h3>

<ol>
<li>9 = S(8), so 21 + 9 = 21 + S(8)</li>
<li>By rule (b): 21 + S(8) = S(21 + 8)</li>
<li>Since 21 + 8 = 29 (established arithmetic fact)</li>
<li>So S(21 + 8) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 21 + 9 = 30. ∎</strong></p>


<h3>220. 21 + 10 = 31</h3>

<ol>
<li>10 = S(9), so 21 + 10 = 21 + S(9)</li>
<li>By rule (b): 21 + S(9) = S(21 + 9)</li>
<li>Since 21 + 9 = 30 (established arithmetic fact)</li>
<li>So S(21 + 9) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 21 + 10 = 31. ∎</strong></p>


<h3>221. 21 + 11 = 32</h3>

<ol>
<li>11 = S(10), so 21 + 11 = 21 + S(10)</li>
<li>By rule (b): 21 + S(10) = S(21 + 10)</li>
<li>Since 21 + 10 = 31 (established arithmetic fact)</li>
<li>So S(21 + 10) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 21 + 11 = 32. ∎</strong></p>


<h3>222. 21 + 12 = 33</h3>

<ol>
<li>12 = S(11), so 21 + 12 = 21 + S(11)</li>
<li>By rule (b): 21 + S(11) = S(21 + 11)</li>
<li>Since 21 + 11 = 32 (established arithmetic fact)</li>
<li>So S(21 + 11) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 21 + 12 = 33. ∎</strong></p>


<h3>223. 21 + 13 = 34</h3>

<ol>
<li>13 = S(12), so 21 + 13 = 21 + S(12)</li>
<li>By rule (b): 21 + S(12) = S(21 + 12)</li>
<li>Since 21 + 12 = 33 (established arithmetic fact)</li>
<li>So S(21 + 12) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 21 + 13 = 34. ∎</strong></p>


<h3>224. 21 + 14 = 35</h3>

<ol>
<li>14 = S(13), so 21 + 14 = 21 + S(13)</li>
<li>By rule (b): 21 + S(13) = S(21 + 13)</li>
<li>Since 21 + 13 = 34 (established arithmetic fact)</li>
<li>So S(21 + 13) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 21 + 14 = 35. ∎</strong></p>


<h3>225. 21 + 15 = 36</h3>

<ol>
<li>15 = S(14), so 21 + 15 = 21 + S(14)</li>
<li>By rule (b): 21 + S(14) = S(21 + 14)</li>
<li>Since 21 + 14 = 35 (established arithmetic fact)</li>
<li>So S(21 + 14) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 21 + 15 = 36. ∎</strong></p>


<h3>226. 21 + 16 = 37</h3>

<ol>
<li>16 = S(15), so 21 + 16 = 21 + S(15)</li>
<li>By rule (b): 21 + S(15) = S(21 + 15)</li>
<li>Since 21 + 15 = 36 (established arithmetic fact)</li>
<li>So S(21 + 15) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 21 + 16 = 37. ∎</strong></p>


<h3>227. 21 + 17 = 38</h3>

<ol>
<li>17 = S(16), so 21 + 17 = 21 + S(16)</li>
<li>By rule (b): 21 + S(16) = S(21 + 16)</li>
<li>Since 21 + 16 = 37 (established arithmetic fact)</li>
<li>So S(21 + 16) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 21 + 17 = 38. ∎</strong></p>


<h3>228. 21 + 18 = 39</h3>

<ol>
<li>18 = S(17), so 21 + 18 = 21 + S(17)</li>
<li>By rule (b): 21 + S(17) = S(21 + 17)</li>
<li>Since 21 + 17 = 38 (established arithmetic fact)</li>
<li>So S(21 + 17) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 21 + 18 = 39. ∎</strong></p>


<h3>229. 21 + 19 = 40</h3>

<ol>
<li>19 = S(18), so 21 + 19 = 21 + S(18)</li>
<li>By rule (b): 21 + S(18) = S(21 + 18)</li>
<li>Since 21 + 18 = 39 (established arithmetic fact)</li>
<li>So S(21 + 18) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 21 + 19 = 40. ∎</strong></p>


<h3>230. 21 + 20 = 41</h3>

<ol>
<li>20 = S(19), so 21 + 20 = 21 + S(19)</li>
<li>By rule (b): 21 + S(19) = S(21 + 19)</li>
<li>Since 21 + 19 = 40 (established arithmetic fact)</li>
<li>So S(21 + 19) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 21 + 20 = 41. ∎</strong></p>


<h3>231. 21 + 21 = 42</h3>

<ol>
<li>21 = S(20), so 21 + 21 = 21 + S(20)</li>
<li>By rule (b): 21 + S(20) = S(21 + 20)</li>
<li>Since 21 + 20 = 41 (established arithmetic fact)</li>
<li>So S(21 + 20) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 21 + 21 = 42. ∎</strong></p>


<h3>232. 22 + 1 = 23</h3>

<ol>
<li>1 = S(0), so 22 + 1 = 22 + S(0)</li>
<li>By rule (b): 22 + S(0) = S(22 + 0)</li>
<li>Since 22 + 0 = 22 (established arithmetic fact)</li>
<li>So S(22 + 0) = S(22)</li>
<li>And S(22) = 23</li>
</ol>

<p><strong>Therefore: 22 + 1 = 23. ∎</strong></p>


<h3>233. 22 + 2 = 24</h3>

<ol>
<li>2 = S(1), so 22 + 2 = 22 + S(1)</li>
<li>By rule (b): 22 + S(1) = S(22 + 1)</li>
<li>Since 22 + 1 = 23 (established arithmetic fact)</li>
<li>So S(22 + 1) = S(23)</li>
<li>And S(23) = 24</li>
</ol>

<p><strong>Therefore: 22 + 2 = 24. ∎</strong></p>


<h3>234. 22 + 3 = 25</h3>

<ol>
<li>3 = S(2), so 22 + 3 = 22 + S(2)</li>
<li>By rule (b): 22 + S(2) = S(22 + 2)</li>
<li>Since 22 + 2 = 24 (established arithmetic fact)</li>
<li>So S(22 + 2) = S(24)</li>
<li>And S(24) = 25</li>
</ol>

<p><strong>Therefore: 22 + 3 = 25. ∎</strong></p>


<h3>235. 22 + 4 = 26</h3>

<ol>
<li>4 = S(3), so 22 + 4 = 22 + S(3)</li>
<li>By rule (b): 22 + S(3) = S(22 + 3)</li>
<li>Since 22 + 3 = 25 (established arithmetic fact)</li>
<li>So S(22 + 3) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 22 + 4 = 26. ∎</strong></p>


<h3>236. 22 + 5 = 27</h3>

<ol>
<li>5 = S(4), so 22 + 5 = 22 + S(4)</li>
<li>By rule (b): 22 + S(4) = S(22 + 4)</li>
<li>Since 22 + 4 = 26 (established arithmetic fact)</li>
<li>So S(22 + 4) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 22 + 5 = 27. ∎</strong></p>


<h3>237. 22 + 6 = 28</h3>

<ol>
<li>6 = S(5), so 22 + 6 = 22 + S(5)</li>
<li>By rule (b): 22 + S(5) = S(22 + 5)</li>
<li>Since 22 + 5 = 27 (established arithmetic fact)</li>
<li>So S(22 + 5) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 22 + 6 = 28. ∎</strong></p>


<h3>238. 22 + 7 = 29</h3>

<ol>
<li>7 = S(6), so 22 + 7 = 22 + S(6)</li>
<li>By rule (b): 22 + S(6) = S(22 + 6)</li>
<li>Since 22 + 6 = 28 (established arithmetic fact)</li>
<li>So S(22 + 6) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 22 + 7 = 29. ∎</strong></p>


<h3>239. 22 + 8 = 30</h3>

<ol>
<li>8 = S(7), so 22 + 8 = 22 + S(7)</li>
<li>By rule (b): 22 + S(7) = S(22 + 7)</li>
<li>Since 22 + 7 = 29 (established arithmetic fact)</li>
<li>So S(22 + 7) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 22 + 8 = 30. ∎</strong></p>


<h3>240. 22 + 9 = 31</h3>

<ol>
<li>9 = S(8), so 22 + 9 = 22 + S(8)</li>
<li>By rule (b): 22 + S(8) = S(22 + 8)</li>
<li>Since 22 + 8 = 30 (established arithmetic fact)</li>
<li>So S(22 + 8) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 22 + 9 = 31. ∎</strong></p>


<h3>241. 22 + 10 = 32</h3>

<ol>
<li>10 = S(9), so 22 + 10 = 22 + S(9)</li>
<li>By rule (b): 22 + S(9) = S(22 + 9)</li>
<li>Since 22 + 9 = 31 (established arithmetic fact)</li>
<li>So S(22 + 9) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 22 + 10 = 32. ∎</strong></p>


<h3>242. 22 + 11 = 33</h3>

<ol>
<li>11 = S(10), so 22 + 11 = 22 + S(10)</li>
<li>By rule (b): 22 + S(10) = S(22 + 10)</li>
<li>Since 22 + 10 = 32 (established arithmetic fact)</li>
<li>So S(22 + 10) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 22 + 11 = 33. ∎</strong></p>


<h3>243. 22 + 12 = 34</h3>

<ol>
<li>12 = S(11), so 22 + 12 = 22 + S(11)</li>
<li>By rule (b): 22 + S(11) = S(22 + 11)</li>
<li>Since 22 + 11 = 33 (established arithmetic fact)</li>
<li>So S(22 + 11) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 22 + 12 = 34. ∎</strong></p>


<h3>244. 22 + 13 = 35</h3>

<ol>
<li>13 = S(12), so 22 + 13 = 22 + S(12)</li>
<li>By rule (b): 22 + S(12) = S(22 + 12)</li>
<li>Since 22 + 12 = 34 (established arithmetic fact)</li>
<li>So S(22 + 12) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 22 + 13 = 35. ∎</strong></p>


<h3>245. 22 + 14 = 36</h3>

<ol>
<li>14 = S(13), so 22 + 14 = 22 + S(13)</li>
<li>By rule (b): 22 + S(13) = S(22 + 13)</li>
<li>Since 22 + 13 = 35 (established arithmetic fact)</li>
<li>So S(22 + 13) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 22 + 14 = 36. ∎</strong></p>


<h3>246. 22 + 15 = 37</h3>

<ol>
<li>15 = S(14), so 22 + 15 = 22 + S(14)</li>
<li>By rule (b): 22 + S(14) = S(22 + 14)</li>
<li>Since 22 + 14 = 36 (established arithmetic fact)</li>
<li>So S(22 + 14) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 22 + 15 = 37. ∎</strong></p>


<h3>247. 22 + 16 = 38</h3>

<ol>
<li>16 = S(15), so 22 + 16 = 22 + S(15)</li>
<li>By rule (b): 22 + S(15) = S(22 + 15)</li>
<li>Since 22 + 15 = 37 (established arithmetic fact)</li>
<li>So S(22 + 15) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 22 + 16 = 38. ∎</strong></p>


<h3>248. 22 + 17 = 39</h3>

<ol>
<li>17 = S(16), so 22 + 17 = 22 + S(16)</li>
<li>By rule (b): 22 + S(16) = S(22 + 16)</li>
<li>Since 22 + 16 = 38 (established arithmetic fact)</li>
<li>So S(22 + 16) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 22 + 17 = 39. ∎</strong></p>


<h3>249. 22 + 18 = 40</h3>

<ol>
<li>18 = S(17), so 22 + 18 = 22 + S(17)</li>
<li>By rule (b): 22 + S(17) = S(22 + 17)</li>
<li>Since 22 + 17 = 39 (established arithmetic fact)</li>
<li>So S(22 + 17) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 22 + 18 = 40. ∎</strong></p>


<h3>250. 22 + 19 = 41</h3>

<ol>
<li>19 = S(18), so 22 + 19 = 22 + S(18)</li>
<li>By rule (b): 22 + S(18) = S(22 + 18)</li>
<li>Since 22 + 18 = 40 (established arithmetic fact)</li>
<li>So S(22 + 18) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 22 + 19 = 41. ∎</strong></p>


<h3>251. 22 + 20 = 42</h3>

<ol>
<li>20 = S(19), so 22 + 20 = 22 + S(19)</li>
<li>By rule (b): 22 + S(19) = S(22 + 19)</li>
<li>Since 22 + 19 = 41 (established arithmetic fact)</li>
<li>So S(22 + 19) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 22 + 20 = 42. ∎</strong></p>


<h3>252. 22 + 21 = 43</h3>

<ol>
<li>21 = S(20), so 22 + 21 = 22 + S(20)</li>
<li>By rule (b): 22 + S(20) = S(22 + 20)</li>
<li>Since 22 + 20 = 42 (established arithmetic fact)</li>
<li>So S(22 + 20) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 22 + 21 = 43. ∎</strong></p>


<h3>253. 22 + 22 = 44</h3>

<ol>
<li>22 = S(21), so 22 + 22 = 22 + S(21)</li>
<li>By rule (b): 22 + S(21) = S(22 + 21)</li>
<li>Since 22 + 21 = 43 (established arithmetic fact)</li>
<li>So S(22 + 21) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 22 + 22 = 44. ∎</strong></p>


<h3>254. 23 + 1 = 24</h3>

<ol>
<li>1 = S(0), so 23 + 1 = 23 + S(0)</li>
<li>By rule (b): 23 + S(0) = S(23 + 0)</li>
<li>Since 23 + 0 = 23 (established arithmetic fact)</li>
<li>So S(23 + 0) = S(23)</li>
<li>And S(23) = 24</li>
</ol>

<p><strong>Therefore: 23 + 1 = 24. ∎</strong></p>


<h3>255. 23 + 2 = 25</h3>

<ol>
<li>2 = S(1), so 23 + 2 = 23 + S(1)</li>
<li>By rule (b): 23 + S(1) = S(23 + 1)</li>
<li>Since 23 + 1 = 24 (established arithmetic fact)</li>
<li>So S(23 + 1) = S(24)</li>
<li>And S(24) = 25</li>
</ol>

<p><strong>Therefore: 23 + 2 = 25. ∎</strong></p>


<h3>256. 23 + 3 = 26</h3>

<ol>
<li>3 = S(2), so 23 + 3 = 23 + S(2)</li>
<li>By rule (b): 23 + S(2) = S(23 + 2)</li>
<li>Since 23 + 2 = 25 (established arithmetic fact)</li>
<li>So S(23 + 2) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 23 + 3 = 26. ∎</strong></p>


<h3>257. 23 + 4 = 27</h3>

<ol>
<li>4 = S(3), so 23 + 4 = 23 + S(3)</li>
<li>By rule (b): 23 + S(3) = S(23 + 3)</li>
<li>Since 23 + 3 = 26 (established arithmetic fact)</li>
<li>So S(23 + 3) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 23 + 4 = 27. ∎</strong></p>


<h3>258. 23 + 5 = 28</h3>

<ol>
<li>5 = S(4), so 23 + 5 = 23 + S(4)</li>
<li>By rule (b): 23 + S(4) = S(23 + 4)</li>
<li>Since 23 + 4 = 27 (established arithmetic fact)</li>
<li>So S(23 + 4) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 23 + 5 = 28. ∎</strong></p>


<h3>259. 23 + 6 = 29</h3>

<ol>
<li>6 = S(5), so 23 + 6 = 23 + S(5)</li>
<li>By rule (b): 23 + S(5) = S(23 + 5)</li>
<li>Since 23 + 5 = 28 (established arithmetic fact)</li>
<li>So S(23 + 5) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 23 + 6 = 29. ∎</strong></p>


<h3>260. 23 + 7 = 30</h3>

<ol>
<li>7 = S(6), so 23 + 7 = 23 + S(6)</li>
<li>By rule (b): 23 + S(6) = S(23 + 6)</li>
<li>Since 23 + 6 = 29 (established arithmetic fact)</li>
<li>So S(23 + 6) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 23 + 7 = 30. ∎</strong></p>


<h3>261. 23 + 8 = 31</h3>

<ol>
<li>8 = S(7), so 23 + 8 = 23 + S(7)</li>
<li>By rule (b): 23 + S(7) = S(23 + 7)</li>
<li>Since 23 + 7 = 30 (established arithmetic fact)</li>
<li>So S(23 + 7) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 23 + 8 = 31. ∎</strong></p>


<h3>262. 23 + 9 = 32</h3>

<ol>
<li>9 = S(8), so 23 + 9 = 23 + S(8)</li>
<li>By rule (b): 23 + S(8) = S(23 + 8)</li>
<li>Since 23 + 8 = 31 (established arithmetic fact)</li>
<li>So S(23 + 8) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 23 + 9 = 32. ∎</strong></p>


<h3>263. 23 + 10 = 33</h3>

<ol>
<li>10 = S(9), so 23 + 10 = 23 + S(9)</li>
<li>By rule (b): 23 + S(9) = S(23 + 9)</li>
<li>Since 23 + 9 = 32 (established arithmetic fact)</li>
<li>So S(23 + 9) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 23 + 10 = 33. ∎</strong></p>


<h3>264. 23 + 11 = 34</h3>

<ol>
<li>11 = S(10), so 23 + 11 = 23 + S(10)</li>
<li>By rule (b): 23 + S(10) = S(23 + 10)</li>
<li>Since 23 + 10 = 33 (established arithmetic fact)</li>
<li>So S(23 + 10) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 23 + 11 = 34. ∎</strong></p>


<h3>265. 23 + 12 = 35</h3>

<ol>
<li>12 = S(11), so 23 + 12 = 23 + S(11)</li>
<li>By rule (b): 23 + S(11) = S(23 + 11)</li>
<li>Since 23 + 11 = 34 (established arithmetic fact)</li>
<li>So S(23 + 11) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 23 + 12 = 35. ∎</strong></p>


<h3>266. 23 + 13 = 36</h3>

<ol>
<li>13 = S(12), so 23 + 13 = 23 + S(12)</li>
<li>By rule (b): 23 + S(12) = S(23 + 12)</li>
<li>Since 23 + 12 = 35 (established arithmetic fact)</li>
<li>So S(23 + 12) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 23 + 13 = 36. ∎</strong></p>


<h3>267. 23 + 14 = 37</h3>

<ol>
<li>14 = S(13), so 23 + 14 = 23 + S(13)</li>
<li>By rule (b): 23 + S(13) = S(23 + 13)</li>
<li>Since 23 + 13 = 36 (established arithmetic fact)</li>
<li>So S(23 + 13) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 23 + 14 = 37. ∎</strong></p>


<h3>268. 23 + 15 = 38</h3>

<ol>
<li>15 = S(14), so 23 + 15 = 23 + S(14)</li>
<li>By rule (b): 23 + S(14) = S(23 + 14)</li>
<li>Since 23 + 14 = 37 (established arithmetic fact)</li>
<li>So S(23 + 14) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 23 + 15 = 38. ∎</strong></p>


<h3>269. 23 + 16 = 39</h3>

<ol>
<li>16 = S(15), so 23 + 16 = 23 + S(15)</li>
<li>By rule (b): 23 + S(15) = S(23 + 15)</li>
<li>Since 23 + 15 = 38 (established arithmetic fact)</li>
<li>So S(23 + 15) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 23 + 16 = 39. ∎</strong></p>


<h3>270. 23 + 17 = 40</h3>

<ol>
<li>17 = S(16), so 23 + 17 = 23 + S(16)</li>
<li>By rule (b): 23 + S(16) = S(23 + 16)</li>
<li>Since 23 + 16 = 39 (established arithmetic fact)</li>
<li>So S(23 + 16) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 23 + 17 = 40. ∎</strong></p>


<h3>271. 23 + 18 = 41</h3>

<ol>
<li>18 = S(17), so 23 + 18 = 23 + S(17)</li>
<li>By rule (b): 23 + S(17) = S(23 + 17)</li>
<li>Since 23 + 17 = 40 (established arithmetic fact)</li>
<li>So S(23 + 17) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 23 + 18 = 41. ∎</strong></p>


<h3>272. 23 + 19 = 42</h3>

<ol>
<li>19 = S(18), so 23 + 19 = 23 + S(18)</li>
<li>By rule (b): 23 + S(18) = S(23 + 18)</li>
<li>Since 23 + 18 = 41 (established arithmetic fact)</li>
<li>So S(23 + 18) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 23 + 19 = 42. ∎</strong></p>


<h3>273. 23 + 20 = 43</h3>

<ol>
<li>20 = S(19), so 23 + 20 = 23 + S(19)</li>
<li>By rule (b): 23 + S(19) = S(23 + 19)</li>
<li>Since 23 + 19 = 42 (established arithmetic fact)</li>
<li>So S(23 + 19) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 23 + 20 = 43. ∎</strong></p>


<h3>274. 23 + 21 = 44</h3>

<ol>
<li>21 = S(20), so 23 + 21 = 23 + S(20)</li>
<li>By rule (b): 23 + S(20) = S(23 + 20)</li>
<li>Since 23 + 20 = 43 (established arithmetic fact)</li>
<li>So S(23 + 20) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 23 + 21 = 44. ∎</strong></p>


<h3>275. 23 + 22 = 45</h3>

<ol>
<li>22 = S(21), so 23 + 22 = 23 + S(21)</li>
<li>By rule (b): 23 + S(21) = S(23 + 21)</li>
<li>Since 23 + 21 = 44 (established arithmetic fact)</li>
<li>So S(23 + 21) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 23 + 22 = 45. ∎</strong></p>


<h3>276. 23 + 23 = 46</h3>

<ol>
<li>23 = S(22), so 23 + 23 = 23 + S(22)</li>
<li>By rule (b): 23 + S(22) = S(23 + 22)</li>
<li>Since 23 + 22 = 45 (established arithmetic fact)</li>
<li>So S(23 + 22) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 23 + 23 = 46. ∎</strong></p>


<h3>277. 24 + 1 = 25</h3>

<ol>
<li>1 = S(0), so 24 + 1 = 24 + S(0)</li>
<li>By rule (b): 24 + S(0) = S(24 + 0)</li>
<li>Since 24 + 0 = 24 (established arithmetic fact)</li>
<li>So S(24 + 0) = S(24)</li>
<li>And S(24) = 25</li>
</ol>

<p><strong>Therefore: 24 + 1 = 25. ∎</strong></p>


<h3>278. 24 + 2 = 26</h3>

<ol>
<li>2 = S(1), so 24 + 2 = 24 + S(1)</li>
<li>By rule (b): 24 + S(1) = S(24 + 1)</li>
<li>Since 24 + 1 = 25 (established arithmetic fact)</li>
<li>So S(24 + 1) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 24 + 2 = 26. ∎</strong></p>


<h3>279. 24 + 3 = 27</h3>

<ol>
<li>3 = S(2), so 24 + 3 = 24 + S(2)</li>
<li>By rule (b): 24 + S(2) = S(24 + 2)</li>
<li>Since 24 + 2 = 26 (established arithmetic fact)</li>
<li>So S(24 + 2) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 24 + 3 = 27. ∎</strong></p>


<h3>280. 24 + 4 = 28</h3>

<ol>
<li>4 = S(3), so 24 + 4 = 24 + S(3)</li>
<li>By rule (b): 24 + S(3) = S(24 + 3)</li>
<li>Since 24 + 3 = 27 (established arithmetic fact)</li>
<li>So S(24 + 3) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 24 + 4 = 28. ∎</strong></p>


<h3>281. 24 + 5 = 29</h3>

<ol>
<li>5 = S(4), so 24 + 5 = 24 + S(4)</li>
<li>By rule (b): 24 + S(4) = S(24 + 4)</li>
<li>Since 24 + 4 = 28 (established arithmetic fact)</li>
<li>So S(24 + 4) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 24 + 5 = 29. ∎</strong></p>


<h3>282. 24 + 6 = 30</h3>

<ol>
<li>6 = S(5), so 24 + 6 = 24 + S(5)</li>
<li>By rule (b): 24 + S(5) = S(24 + 5)</li>
<li>Since 24 + 5 = 29 (established arithmetic fact)</li>
<li>So S(24 + 5) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 24 + 6 = 30. ∎</strong></p>


<h3>283. 24 + 7 = 31</h3>

<ol>
<li>7 = S(6), so 24 + 7 = 24 + S(6)</li>
<li>By rule (b): 24 + S(6) = S(24 + 6)</li>
<li>Since 24 + 6 = 30 (established arithmetic fact)</li>
<li>So S(24 + 6) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 24 + 7 = 31. ∎</strong></p>


<h3>284. 24 + 8 = 32</h3>

<ol>
<li>8 = S(7), so 24 + 8 = 24 + S(7)</li>
<li>By rule (b): 24 + S(7) = S(24 + 7)</li>
<li>Since 24 + 7 = 31 (established arithmetic fact)</li>
<li>So S(24 + 7) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 24 + 8 = 32. ∎</strong></p>


<h3>285. 24 + 9 = 33</h3>

<ol>
<li>9 = S(8), so 24 + 9 = 24 + S(8)</li>
<li>By rule (b): 24 + S(8) = S(24 + 8)</li>
<li>Since 24 + 8 = 32 (established arithmetic fact)</li>
<li>So S(24 + 8) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 24 + 9 = 33. ∎</strong></p>


<h3>286. 24 + 10 = 34</h3>

<ol>
<li>10 = S(9), so 24 + 10 = 24 + S(9)</li>
<li>By rule (b): 24 + S(9) = S(24 + 9)</li>
<li>Since 24 + 9 = 33 (established arithmetic fact)</li>
<li>So S(24 + 9) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 24 + 10 = 34. ∎</strong></p>


<h3>287. 24 + 11 = 35</h3>

<ol>
<li>11 = S(10), so 24 + 11 = 24 + S(10)</li>
<li>By rule (b): 24 + S(10) = S(24 + 10)</li>
<li>Since 24 + 10 = 34 (established arithmetic fact)</li>
<li>So S(24 + 10) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 24 + 11 = 35. ∎</strong></p>


<h3>288. 24 + 12 = 36</h3>

<ol>
<li>12 = S(11), so 24 + 12 = 24 + S(11)</li>
<li>By rule (b): 24 + S(11) = S(24 + 11)</li>
<li>Since 24 + 11 = 35 (established arithmetic fact)</li>
<li>So S(24 + 11) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 24 + 12 = 36. ∎</strong></p>


<h3>289. 24 + 13 = 37</h3>

<ol>
<li>13 = S(12), so 24 + 13 = 24 + S(12)</li>
<li>By rule (b): 24 + S(12) = S(24 + 12)</li>
<li>Since 24 + 12 = 36 (established arithmetic fact)</li>
<li>So S(24 + 12) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 24 + 13 = 37. ∎</strong></p>


<h3>290. 24 + 14 = 38</h3>

<ol>
<li>14 = S(13), so 24 + 14 = 24 + S(13)</li>
<li>By rule (b): 24 + S(13) = S(24 + 13)</li>
<li>Since 24 + 13 = 37 (established arithmetic fact)</li>
<li>So S(24 + 13) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 24 + 14 = 38. ∎</strong></p>


<h3>291. 24 + 15 = 39</h3>

<ol>
<li>15 = S(14), so 24 + 15 = 24 + S(14)</li>
<li>By rule (b): 24 + S(14) = S(24 + 14)</li>
<li>Since 24 + 14 = 38 (established arithmetic fact)</li>
<li>So S(24 + 14) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 24 + 15 = 39. ∎</strong></p>


<h3>292. 24 + 16 = 40</h3>

<ol>
<li>16 = S(15), so 24 + 16 = 24 + S(15)</li>
<li>By rule (b): 24 + S(15) = S(24 + 15)</li>
<li>Since 24 + 15 = 39 (established arithmetic fact)</li>
<li>So S(24 + 15) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 24 + 16 = 40. ∎</strong></p>


<h3>293. 24 + 17 = 41</h3>

<ol>
<li>17 = S(16), so 24 + 17 = 24 + S(16)</li>
<li>By rule (b): 24 + S(16) = S(24 + 16)</li>
<li>Since 24 + 16 = 40 (established arithmetic fact)</li>
<li>So S(24 + 16) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 24 + 17 = 41. ∎</strong></p>


<h3>294. 24 + 18 = 42</h3>

<ol>
<li>18 = S(17), so 24 + 18 = 24 + S(17)</li>
<li>By rule (b): 24 + S(17) = S(24 + 17)</li>
<li>Since 24 + 17 = 41 (established arithmetic fact)</li>
<li>So S(24 + 17) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 24 + 18 = 42. ∎</strong></p>


<h3>295. 24 + 19 = 43</h3>

<ol>
<li>19 = S(18), so 24 + 19 = 24 + S(18)</li>
<li>By rule (b): 24 + S(18) = S(24 + 18)</li>
<li>Since 24 + 18 = 42 (established arithmetic fact)</li>
<li>So S(24 + 18) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 24 + 19 = 43. ∎</strong></p>


<h3>296. 24 + 20 = 44</h3>

<ol>
<li>20 = S(19), so 24 + 20 = 24 + S(19)</li>
<li>By rule (b): 24 + S(19) = S(24 + 19)</li>
<li>Since 24 + 19 = 43 (established arithmetic fact)</li>
<li>So S(24 + 19) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 24 + 20 = 44. ∎</strong></p>


<h3>297. 24 + 21 = 45</h3>

<ol>
<li>21 = S(20), so 24 + 21 = 24 + S(20)</li>
<li>By rule (b): 24 + S(20) = S(24 + 20)</li>
<li>Since 24 + 20 = 44 (established arithmetic fact)</li>
<li>So S(24 + 20) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 24 + 21 = 45. ∎</strong></p>


<h3>298. 24 + 22 = 46</h3>

<ol>
<li>22 = S(21), so 24 + 22 = 24 + S(21)</li>
<li>By rule (b): 24 + S(21) = S(24 + 21)</li>
<li>Since 24 + 21 = 45 (established arithmetic fact)</li>
<li>So S(24 + 21) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 24 + 22 = 46. ∎</strong></p>


<h3>299. 24 + 23 = 47</h3>

<ol>
<li>23 = S(22), so 24 + 23 = 24 + S(22)</li>
<li>By rule (b): 24 + S(22) = S(24 + 22)</li>
<li>Since 24 + 22 = 46 (established arithmetic fact)</li>
<li>So S(24 + 22) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 24 + 23 = 47. ∎</strong></p>


<h3>300. 24 + 24 = 48</h3>

<ol>
<li>24 = S(23), so 24 + 24 = 24 + S(23)</li>
<li>By rule (b): 24 + S(23) = S(24 + 23)</li>
<li>Since 24 + 23 = 47 (established arithmetic fact)</li>
<li>So S(24 + 23) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 24 + 24 = 48. ∎</strong></p>


<h3>301. 25 + 1 = 26</h3>

<ol>
<li>1 = S(0), so 25 + 1 = 25 + S(0)</li>
<li>By rule (b): 25 + S(0) = S(25 + 0)</li>
<li>Since 25 + 0 = 25 (established arithmetic fact)</li>
<li>So S(25 + 0) = S(25)</li>
<li>And S(25) = 26</li>
</ol>

<p><strong>Therefore: 25 + 1 = 26. ∎</strong></p>


<h3>302. 25 + 2 = 27</h3>

<ol>
<li>2 = S(1), so 25 + 2 = 25 + S(1)</li>
<li>By rule (b): 25 + S(1) = S(25 + 1)</li>
<li>Since 25 + 1 = 26 (established arithmetic fact)</li>
<li>So S(25 + 1) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 25 + 2 = 27. ∎</strong></p>


<h3>303. 25 + 3 = 28</h3>

<ol>
<li>3 = S(2), so 25 + 3 = 25 + S(2)</li>
<li>By rule (b): 25 + S(2) = S(25 + 2)</li>
<li>Since 25 + 2 = 27 (established arithmetic fact)</li>
<li>So S(25 + 2) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 25 + 3 = 28. ∎</strong></p>


<h3>304. 25 + 4 = 29</h3>

<ol>
<li>4 = S(3), so 25 + 4 = 25 + S(3)</li>
<li>By rule (b): 25 + S(3) = S(25 + 3)</li>
<li>Since 25 + 3 = 28 (established arithmetic fact)</li>
<li>So S(25 + 3) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 25 + 4 = 29. ∎</strong></p>


<h3>305. 25 + 5 = 30</h3>

<ol>
<li>5 = S(4), so 25 + 5 = 25 + S(4)</li>
<li>By rule (b): 25 + S(4) = S(25 + 4)</li>
<li>Since 25 + 4 = 29 (established arithmetic fact)</li>
<li>So S(25 + 4) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 25 + 5 = 30. ∎</strong></p>


<h3>306. 25 + 6 = 31</h3>

<ol>
<li>6 = S(5), so 25 + 6 = 25 + S(5)</li>
<li>By rule (b): 25 + S(5) = S(25 + 5)</li>
<li>Since 25 + 5 = 30 (established arithmetic fact)</li>
<li>So S(25 + 5) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 25 + 6 = 31. ∎</strong></p>


<h3>307. 25 + 7 = 32</h3>

<ol>
<li>7 = S(6), so 25 + 7 = 25 + S(6)</li>
<li>By rule (b): 25 + S(6) = S(25 + 6)</li>
<li>Since 25 + 6 = 31 (established arithmetic fact)</li>
<li>So S(25 + 6) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 25 + 7 = 32. ∎</strong></p>


<h3>308. 25 + 8 = 33</h3>

<ol>
<li>8 = S(7), so 25 + 8 = 25 + S(7)</li>
<li>By rule (b): 25 + S(7) = S(25 + 7)</li>
<li>Since 25 + 7 = 32 (established arithmetic fact)</li>
<li>So S(25 + 7) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 25 + 8 = 33. ∎</strong></p>


<h3>309. 25 + 9 = 34</h3>

<ol>
<li>9 = S(8), so 25 + 9 = 25 + S(8)</li>
<li>By rule (b): 25 + S(8) = S(25 + 8)</li>
<li>Since 25 + 8 = 33 (established arithmetic fact)</li>
<li>So S(25 + 8) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 25 + 9 = 34. ∎</strong></p>


<h3>310. 25 + 10 = 35</h3>

<ol>
<li>10 = S(9), so 25 + 10 = 25 + S(9)</li>
<li>By rule (b): 25 + S(9) = S(25 + 9)</li>
<li>Since 25 + 9 = 34 (established arithmetic fact)</li>
<li>So S(25 + 9) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 25 + 10 = 35. ∎</strong></p>


<h3>311. 25 + 11 = 36</h3>

<ol>
<li>11 = S(10), so 25 + 11 = 25 + S(10)</li>
<li>By rule (b): 25 + S(10) = S(25 + 10)</li>
<li>Since 25 + 10 = 35 (established arithmetic fact)</li>
<li>So S(25 + 10) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 25 + 11 = 36. ∎</strong></p>


<h3>312. 25 + 12 = 37</h3>

<ol>
<li>12 = S(11), so 25 + 12 = 25 + S(11)</li>
<li>By rule (b): 25 + S(11) = S(25 + 11)</li>
<li>Since 25 + 11 = 36 (established arithmetic fact)</li>
<li>So S(25 + 11) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 25 + 12 = 37. ∎</strong></p>


<h3>313. 25 + 13 = 38</h3>

<ol>
<li>13 = S(12), so 25 + 13 = 25 + S(12)</li>
<li>By rule (b): 25 + S(12) = S(25 + 12)</li>
<li>Since 25 + 12 = 37 (established arithmetic fact)</li>
<li>So S(25 + 12) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 25 + 13 = 38. ∎</strong></p>


<h3>314. 25 + 14 = 39</h3>

<ol>
<li>14 = S(13), so 25 + 14 = 25 + S(13)</li>
<li>By rule (b): 25 + S(13) = S(25 + 13)</li>
<li>Since 25 + 13 = 38 (established arithmetic fact)</li>
<li>So S(25 + 13) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 25 + 14 = 39. ∎</strong></p>


<h3>315. 25 + 15 = 40</h3>

<ol>
<li>15 = S(14), so 25 + 15 = 25 + S(14)</li>
<li>By rule (b): 25 + S(14) = S(25 + 14)</li>
<li>Since 25 + 14 = 39 (established arithmetic fact)</li>
<li>So S(25 + 14) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 25 + 15 = 40. ∎</strong></p>


<h3>316. 25 + 16 = 41</h3>

<ol>
<li>16 = S(15), so 25 + 16 = 25 + S(15)</li>
<li>By rule (b): 25 + S(15) = S(25 + 15)</li>
<li>Since 25 + 15 = 40 (established arithmetic fact)</li>
<li>So S(25 + 15) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 25 + 16 = 41. ∎</strong></p>


<h3>317. 25 + 17 = 42</h3>

<ol>
<li>17 = S(16), so 25 + 17 = 25 + S(16)</li>
<li>By rule (b): 25 + S(16) = S(25 + 16)</li>
<li>Since 25 + 16 = 41 (established arithmetic fact)</li>
<li>So S(25 + 16) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 25 + 17 = 42. ∎</strong></p>


<h3>318. 25 + 18 = 43</h3>

<ol>
<li>18 = S(17), so 25 + 18 = 25 + S(17)</li>
<li>By rule (b): 25 + S(17) = S(25 + 17)</li>
<li>Since 25 + 17 = 42 (established arithmetic fact)</li>
<li>So S(25 + 17) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 25 + 18 = 43. ∎</strong></p>


<h3>319. 25 + 19 = 44</h3>

<ol>
<li>19 = S(18), so 25 + 19 = 25 + S(18)</li>
<li>By rule (b): 25 + S(18) = S(25 + 18)</li>
<li>Since 25 + 18 = 43 (established arithmetic fact)</li>
<li>So S(25 + 18) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 25 + 19 = 44. ∎</strong></p>


<h3>320. 25 + 20 = 45</h3>

<ol>
<li>20 = S(19), so 25 + 20 = 25 + S(19)</li>
<li>By rule (b): 25 + S(19) = S(25 + 19)</li>
<li>Since 25 + 19 = 44 (established arithmetic fact)</li>
<li>So S(25 + 19) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 25 + 20 = 45. ∎</strong></p>


<h3>321. 25 + 21 = 46</h3>

<ol>
<li>21 = S(20), so 25 + 21 = 25 + S(20)</li>
<li>By rule (b): 25 + S(20) = S(25 + 20)</li>
<li>Since 25 + 20 = 45 (established arithmetic fact)</li>
<li>So S(25 + 20) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 25 + 21 = 46. ∎</strong></p>


<h3>322. 25 + 22 = 47</h3>

<ol>
<li>22 = S(21), so 25 + 22 = 25 + S(21)</li>
<li>By rule (b): 25 + S(21) = S(25 + 21)</li>
<li>Since 25 + 21 = 46 (established arithmetic fact)</li>
<li>So S(25 + 21) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 25 + 22 = 47. ∎</strong></p>


<h3>323. 25 + 23 = 48</h3>

<ol>
<li>23 = S(22), so 25 + 23 = 25 + S(22)</li>
<li>By rule (b): 25 + S(22) = S(25 + 22)</li>
<li>Since 25 + 22 = 47 (established arithmetic fact)</li>
<li>So S(25 + 22) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 25 + 23 = 48. ∎</strong></p>


<h3>324. 25 + 24 = 49</h3>

<ol>
<li>24 = S(23), so 25 + 24 = 25 + S(23)</li>
<li>By rule (b): 25 + S(23) = S(25 + 23)</li>
<li>Since 25 + 23 = 48 (established arithmetic fact)</li>
<li>So S(25 + 23) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 25 + 24 = 49. ∎</strong></p>


<h3>325. 25 + 25 = 50</h3>

<ol>
<li>25 = S(24), so 25 + 25 = 25 + S(24)</li>
<li>By rule (b): 25 + S(24) = S(25 + 24)</li>
<li>Since 25 + 24 = 49 (established arithmetic fact)</li>
<li>So S(25 + 24) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 25 + 25 = 50. ∎</strong></p>


<h3>326. 26 + 1 = 27</h3>

<ol>
<li>1 = S(0), so 26 + 1 = 26 + S(0)</li>
<li>By rule (b): 26 + S(0) = S(26 + 0)</li>
<li>Since 26 + 0 = 26 (established arithmetic fact)</li>
<li>So S(26 + 0) = S(26)</li>
<li>And S(26) = 27</li>
</ol>

<p><strong>Therefore: 26 + 1 = 27. ∎</strong></p>


<h3>327. 26 + 2 = 28</h3>

<ol>
<li>2 = S(1), so 26 + 2 = 26 + S(1)</li>
<li>By rule (b): 26 + S(1) = S(26 + 1)</li>
<li>Since 26 + 1 = 27 (established arithmetic fact)</li>
<li>So S(26 + 1) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 26 + 2 = 28. ∎</strong></p>


<h3>328. 26 + 3 = 29</h3>

<ol>
<li>3 = S(2), so 26 + 3 = 26 + S(2)</li>
<li>By rule (b): 26 + S(2) = S(26 + 2)</li>
<li>Since 26 + 2 = 28 (established arithmetic fact)</li>
<li>So S(26 + 2) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 26 + 3 = 29. ∎</strong></p>


<h3>329. 26 + 4 = 30</h3>

<ol>
<li>4 = S(3), so 26 + 4 = 26 + S(3)</li>
<li>By rule (b): 26 + S(3) = S(26 + 3)</li>
<li>Since 26 + 3 = 29 (established arithmetic fact)</li>
<li>So S(26 + 3) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 26 + 4 = 30. ∎</strong></p>


<h3>330. 26 + 5 = 31</h3>

<ol>
<li>5 = S(4), so 26 + 5 = 26 + S(4)</li>
<li>By rule (b): 26 + S(4) = S(26 + 4)</li>
<li>Since 26 + 4 = 30 (established arithmetic fact)</li>
<li>So S(26 + 4) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 26 + 5 = 31. ∎</strong></p>


<h3>331. 26 + 6 = 32</h3>

<ol>
<li>6 = S(5), so 26 + 6 = 26 + S(5)</li>
<li>By rule (b): 26 + S(5) = S(26 + 5)</li>
<li>Since 26 + 5 = 31 (established arithmetic fact)</li>
<li>So S(26 + 5) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 26 + 6 = 32. ∎</strong></p>


<h3>332. 26 + 7 = 33</h3>

<ol>
<li>7 = S(6), so 26 + 7 = 26 + S(6)</li>
<li>By rule (b): 26 + S(6) = S(26 + 6)</li>
<li>Since 26 + 6 = 32 (established arithmetic fact)</li>
<li>So S(26 + 6) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 26 + 7 = 33. ∎</strong></p>


<h3>333. 26 + 8 = 34</h3>

<ol>
<li>8 = S(7), so 26 + 8 = 26 + S(7)</li>
<li>By rule (b): 26 + S(7) = S(26 + 7)</li>
<li>Since 26 + 7 = 33 (established arithmetic fact)</li>
<li>So S(26 + 7) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 26 + 8 = 34. ∎</strong></p>


<h3>334. 26 + 9 = 35</h3>

<ol>
<li>9 = S(8), so 26 + 9 = 26 + S(8)</li>
<li>By rule (b): 26 + S(8) = S(26 + 8)</li>
<li>Since 26 + 8 = 34 (established arithmetic fact)</li>
<li>So S(26 + 8) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 26 + 9 = 35. ∎</strong></p>


<h3>335. 26 + 10 = 36</h3>

<ol>
<li>10 = S(9), so 26 + 10 = 26 + S(9)</li>
<li>By rule (b): 26 + S(9) = S(26 + 9)</li>
<li>Since 26 + 9 = 35 (established arithmetic fact)</li>
<li>So S(26 + 9) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 26 + 10 = 36. ∎</strong></p>


<h3>336. 26 + 11 = 37</h3>

<ol>
<li>11 = S(10), so 26 + 11 = 26 + S(10)</li>
<li>By rule (b): 26 + S(10) = S(26 + 10)</li>
<li>Since 26 + 10 = 36 (established arithmetic fact)</li>
<li>So S(26 + 10) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 26 + 11 = 37. ∎</strong></p>


<h3>337. 26 + 12 = 38</h3>

<ol>
<li>12 = S(11), so 26 + 12 = 26 + S(11)</li>
<li>By rule (b): 26 + S(11) = S(26 + 11)</li>
<li>Since 26 + 11 = 37 (established arithmetic fact)</li>
<li>So S(26 + 11) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 26 + 12 = 38. ∎</strong></p>


<h3>338. 26 + 13 = 39</h3>

<ol>
<li>13 = S(12), so 26 + 13 = 26 + S(12)</li>
<li>By rule (b): 26 + S(12) = S(26 + 12)</li>
<li>Since 26 + 12 = 38 (established arithmetic fact)</li>
<li>So S(26 + 12) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 26 + 13 = 39. ∎</strong></p>


<h3>339. 26 + 14 = 40</h3>

<ol>
<li>14 = S(13), so 26 + 14 = 26 + S(13)</li>
<li>By rule (b): 26 + S(13) = S(26 + 13)</li>
<li>Since 26 + 13 = 39 (established arithmetic fact)</li>
<li>So S(26 + 13) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 26 + 14 = 40. ∎</strong></p>


<h3>340. 26 + 15 = 41</h3>

<ol>
<li>15 = S(14), so 26 + 15 = 26 + S(14)</li>
<li>By rule (b): 26 + S(14) = S(26 + 14)</li>
<li>Since 26 + 14 = 40 (established arithmetic fact)</li>
<li>So S(26 + 14) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 26 + 15 = 41. ∎</strong></p>


<h3>341. 26 + 16 = 42</h3>

<ol>
<li>16 = S(15), so 26 + 16 = 26 + S(15)</li>
<li>By rule (b): 26 + S(15) = S(26 + 15)</li>
<li>Since 26 + 15 = 41 (established arithmetic fact)</li>
<li>So S(26 + 15) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 26 + 16 = 42. ∎</strong></p>


<h3>342. 26 + 17 = 43</h3>

<ol>
<li>17 = S(16), so 26 + 17 = 26 + S(16)</li>
<li>By rule (b): 26 + S(16) = S(26 + 16)</li>
<li>Since 26 + 16 = 42 (established arithmetic fact)</li>
<li>So S(26 + 16) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 26 + 17 = 43. ∎</strong></p>


<h3>343. 26 + 18 = 44</h3>

<ol>
<li>18 = S(17), so 26 + 18 = 26 + S(17)</li>
<li>By rule (b): 26 + S(17) = S(26 + 17)</li>
<li>Since 26 + 17 = 43 (established arithmetic fact)</li>
<li>So S(26 + 17) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 26 + 18 = 44. ∎</strong></p>


<h3>344. 26 + 19 = 45</h3>

<ol>
<li>19 = S(18), so 26 + 19 = 26 + S(18)</li>
<li>By rule (b): 26 + S(18) = S(26 + 18)</li>
<li>Since 26 + 18 = 44 (established arithmetic fact)</li>
<li>So S(26 + 18) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 26 + 19 = 45. ∎</strong></p>


<h3>345. 26 + 20 = 46</h3>

<ol>
<li>20 = S(19), so 26 + 20 = 26 + S(19)</li>
<li>By rule (b): 26 + S(19) = S(26 + 19)</li>
<li>Since 26 + 19 = 45 (established arithmetic fact)</li>
<li>So S(26 + 19) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 26 + 20 = 46. ∎</strong></p>


<h3>346. 26 + 21 = 47</h3>

<ol>
<li>21 = S(20), so 26 + 21 = 26 + S(20)</li>
<li>By rule (b): 26 + S(20) = S(26 + 20)</li>
<li>Since 26 + 20 = 46 (established arithmetic fact)</li>
<li>So S(26 + 20) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 26 + 21 = 47. ∎</strong></p>


<h3>347. 26 + 22 = 48</h3>

<ol>
<li>22 = S(21), so 26 + 22 = 26 + S(21)</li>
<li>By rule (b): 26 + S(21) = S(26 + 21)</li>
<li>Since 26 + 21 = 47 (established arithmetic fact)</li>
<li>So S(26 + 21) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 26 + 22 = 48. ∎</strong></p>


<h3>348. 26 + 23 = 49</h3>

<ol>
<li>23 = S(22), so 26 + 23 = 26 + S(22)</li>
<li>By rule (b): 26 + S(22) = S(26 + 22)</li>
<li>Since 26 + 22 = 48 (established arithmetic fact)</li>
<li>So S(26 + 22) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 26 + 23 = 49. ∎</strong></p>


<h3>349. 26 + 24 = 50</h3>

<ol>
<li>24 = S(23), so 26 + 24 = 26 + S(23)</li>
<li>By rule (b): 26 + S(23) = S(26 + 23)</li>
<li>Since 26 + 23 = 49 (established arithmetic fact)</li>
<li>So S(26 + 23) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 26 + 24 = 50. ∎</strong></p>


<h3>350. 26 + 25 = 51</h3>

<ol>
<li>25 = S(24), so 26 + 25 = 26 + S(24)</li>
<li>By rule (b): 26 + S(24) = S(26 + 24)</li>
<li>Since 26 + 24 = 50 (established arithmetic fact)</li>
<li>So S(26 + 24) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 26 + 25 = 51. ∎</strong></p>


<h3>351. 26 + 26 = 52</h3>

<ol>
<li>26 = S(25), so 26 + 26 = 26 + S(25)</li>
<li>By rule (b): 26 + S(25) = S(26 + 25)</li>
<li>Since 26 + 25 = 51 (established arithmetic fact)</li>
<li>So S(26 + 25) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 26 + 26 = 52. ∎</strong></p>


<h3>352. 27 + 1 = 28</h3>

<ol>
<li>1 = S(0), so 27 + 1 = 27 + S(0)</li>
<li>By rule (b): 27 + S(0) = S(27 + 0)</li>
<li>Since 27 + 0 = 27 (established arithmetic fact)</li>
<li>So S(27 + 0) = S(27)</li>
<li>And S(27) = 28</li>
</ol>

<p><strong>Therefore: 27 + 1 = 28. ∎</strong></p>


<h3>353. 27 + 2 = 29</h3>

<ol>
<li>2 = S(1), so 27 + 2 = 27 + S(1)</li>
<li>By rule (b): 27 + S(1) = S(27 + 1)</li>
<li>Since 27 + 1 = 28 (established arithmetic fact)</li>
<li>So S(27 + 1) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 27 + 2 = 29. ∎</strong></p>


<h3>354. 27 + 3 = 30</h3>

<ol>
<li>3 = S(2), so 27 + 3 = 27 + S(2)</li>
<li>By rule (b): 27 + S(2) = S(27 + 2)</li>
<li>Since 27 + 2 = 29 (established arithmetic fact)</li>
<li>So S(27 + 2) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 27 + 3 = 30. ∎</strong></p>


<h3>355. 27 + 4 = 31</h3>

<ol>
<li>4 = S(3), so 27 + 4 = 27 + S(3)</li>
<li>By rule (b): 27 + S(3) = S(27 + 3)</li>
<li>Since 27 + 3 = 30 (established arithmetic fact)</li>
<li>So S(27 + 3) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 27 + 4 = 31. ∎</strong></p>


<h3>356. 27 + 5 = 32</h3>

<ol>
<li>5 = S(4), so 27 + 5 = 27 + S(4)</li>
<li>By rule (b): 27 + S(4) = S(27 + 4)</li>
<li>Since 27 + 4 = 31 (established arithmetic fact)</li>
<li>So S(27 + 4) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 27 + 5 = 32. ∎</strong></p>


<h3>357. 27 + 6 = 33</h3>

<ol>
<li>6 = S(5), so 27 + 6 = 27 + S(5)</li>
<li>By rule (b): 27 + S(5) = S(27 + 5)</li>
<li>Since 27 + 5 = 32 (established arithmetic fact)</li>
<li>So S(27 + 5) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 27 + 6 = 33. ∎</strong></p>


<h3>358. 27 + 7 = 34</h3>

<ol>
<li>7 = S(6), so 27 + 7 = 27 + S(6)</li>
<li>By rule (b): 27 + S(6) = S(27 + 6)</li>
<li>Since 27 + 6 = 33 (established arithmetic fact)</li>
<li>So S(27 + 6) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 27 + 7 = 34. ∎</strong></p>


<h3>359. 27 + 8 = 35</h3>

<ol>
<li>8 = S(7), so 27 + 8 = 27 + S(7)</li>
<li>By rule (b): 27 + S(7) = S(27 + 7)</li>
<li>Since 27 + 7 = 34 (established arithmetic fact)</li>
<li>So S(27 + 7) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 27 + 8 = 35. ∎</strong></p>


<h3>360. 27 + 9 = 36</h3>

<ol>
<li>9 = S(8), so 27 + 9 = 27 + S(8)</li>
<li>By rule (b): 27 + S(8) = S(27 + 8)</li>
<li>Since 27 + 8 = 35 (established arithmetic fact)</li>
<li>So S(27 + 8) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 27 + 9 = 36. ∎</strong></p>


<h3>361. 27 + 10 = 37</h3>

<ol>
<li>10 = S(9), so 27 + 10 = 27 + S(9)</li>
<li>By rule (b): 27 + S(9) = S(27 + 9)</li>
<li>Since 27 + 9 = 36 (established arithmetic fact)</li>
<li>So S(27 + 9) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 27 + 10 = 37. ∎</strong></p>


<h3>362. 27 + 11 = 38</h3>

<ol>
<li>11 = S(10), so 27 + 11 = 27 + S(10)</li>
<li>By rule (b): 27 + S(10) = S(27 + 10)</li>
<li>Since 27 + 10 = 37 (established arithmetic fact)</li>
<li>So S(27 + 10) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 27 + 11 = 38. ∎</strong></p>


<h3>363. 27 + 12 = 39</h3>

<ol>
<li>12 = S(11), so 27 + 12 = 27 + S(11)</li>
<li>By rule (b): 27 + S(11) = S(27 + 11)</li>
<li>Since 27 + 11 = 38 (established arithmetic fact)</li>
<li>So S(27 + 11) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 27 + 12 = 39. ∎</strong></p>


<h3>364. 27 + 13 = 40</h3>

<ol>
<li>13 = S(12), so 27 + 13 = 27 + S(12)</li>
<li>By rule (b): 27 + S(12) = S(27 + 12)</li>
<li>Since 27 + 12 = 39 (established arithmetic fact)</li>
<li>So S(27 + 12) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 27 + 13 = 40. ∎</strong></p>


<h3>365. 27 + 14 = 41</h3>

<ol>
<li>14 = S(13), so 27 + 14 = 27 + S(13)</li>
<li>By rule (b): 27 + S(13) = S(27 + 13)</li>
<li>Since 27 + 13 = 40 (established arithmetic fact)</li>
<li>So S(27 + 13) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 27 + 14 = 41. ∎</strong></p>


<h3>366. 27 + 15 = 42</h3>

<ol>
<li>15 = S(14), so 27 + 15 = 27 + S(14)</li>
<li>By rule (b): 27 + S(14) = S(27 + 14)</li>
<li>Since 27 + 14 = 41 (established arithmetic fact)</li>
<li>So S(27 + 14) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 27 + 15 = 42. ∎</strong></p>


<h3>367. 27 + 16 = 43</h3>

<ol>
<li>16 = S(15), so 27 + 16 = 27 + S(15)</li>
<li>By rule (b): 27 + S(15) = S(27 + 15)</li>
<li>Since 27 + 15 = 42 (established arithmetic fact)</li>
<li>So S(27 + 15) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 27 + 16 = 43. ∎</strong></p>


<h3>368. 27 + 17 = 44</h3>

<ol>
<li>17 = S(16), so 27 + 17 = 27 + S(16)</li>
<li>By rule (b): 27 + S(16) = S(27 + 16)</li>
<li>Since 27 + 16 = 43 (established arithmetic fact)</li>
<li>So S(27 + 16) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 27 + 17 = 44. ∎</strong></p>


<h3>369. 27 + 18 = 45</h3>

<ol>
<li>18 = S(17), so 27 + 18 = 27 + S(17)</li>
<li>By rule (b): 27 + S(17) = S(27 + 17)</li>
<li>Since 27 + 17 = 44 (established arithmetic fact)</li>
<li>So S(27 + 17) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 27 + 18 = 45. ∎</strong></p>


<h3>370. 27 + 19 = 46</h3>

<ol>
<li>19 = S(18), so 27 + 19 = 27 + S(18)</li>
<li>By rule (b): 27 + S(18) = S(27 + 18)</li>
<li>Since 27 + 18 = 45 (established arithmetic fact)</li>
<li>So S(27 + 18) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 27 + 19 = 46. ∎</strong></p>


<h3>371. 27 + 20 = 47</h3>

<ol>
<li>20 = S(19), so 27 + 20 = 27 + S(19)</li>
<li>By rule (b): 27 + S(19) = S(27 + 19)</li>
<li>Since 27 + 19 = 46 (established arithmetic fact)</li>
<li>So S(27 + 19) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 27 + 20 = 47. ∎</strong></p>


<h3>372. 27 + 21 = 48</h3>

<ol>
<li>21 = S(20), so 27 + 21 = 27 + S(20)</li>
<li>By rule (b): 27 + S(20) = S(27 + 20)</li>
<li>Since 27 + 20 = 47 (established arithmetic fact)</li>
<li>So S(27 + 20) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 27 + 21 = 48. ∎</strong></p>


<h3>373. 27 + 22 = 49</h3>

<ol>
<li>22 = S(21), so 27 + 22 = 27 + S(21)</li>
<li>By rule (b): 27 + S(21) = S(27 + 21)</li>
<li>Since 27 + 21 = 48 (established arithmetic fact)</li>
<li>So S(27 + 21) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 27 + 22 = 49. ∎</strong></p>


<h3>374. 27 + 23 = 50</h3>

<ol>
<li>23 = S(22), so 27 + 23 = 27 + S(22)</li>
<li>By rule (b): 27 + S(22) = S(27 + 22)</li>
<li>Since 27 + 22 = 49 (established arithmetic fact)</li>
<li>So S(27 + 22) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 27 + 23 = 50. ∎</strong></p>


<h3>375. 27 + 24 = 51</h3>

<ol>
<li>24 = S(23), so 27 + 24 = 27 + S(23)</li>
<li>By rule (b): 27 + S(23) = S(27 + 23)</li>
<li>Since 27 + 23 = 50 (established arithmetic fact)</li>
<li>So S(27 + 23) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 27 + 24 = 51. ∎</strong></p>


<h3>376. 27 + 25 = 52</h3>

<ol>
<li>25 = S(24), so 27 + 25 = 27 + S(24)</li>
<li>By rule (b): 27 + S(24) = S(27 + 24)</li>
<li>Since 27 + 24 = 51 (established arithmetic fact)</li>
<li>So S(27 + 24) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 27 + 25 = 52. ∎</strong></p>


<h3>377. 27 + 26 = 53</h3>

<ol>
<li>26 = S(25), so 27 + 26 = 27 + S(25)</li>
<li>By rule (b): 27 + S(25) = S(27 + 25)</li>
<li>Since 27 + 25 = 52 (established arithmetic fact)</li>
<li>So S(27 + 25) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 27 + 26 = 53. ∎</strong></p>


<h3>378. 27 + 27 = 54</h3>

<ol>
<li>27 = S(26), so 27 + 27 = 27 + S(26)</li>
<li>By rule (b): 27 + S(26) = S(27 + 26)</li>
<li>Since 27 + 26 = 53 (established arithmetic fact)</li>
<li>So S(27 + 26) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 27 + 27 = 54. ∎</strong></p>


<h3>379. 28 + 1 = 29</h3>

<ol>
<li>1 = S(0), so 28 + 1 = 28 + S(0)</li>
<li>By rule (b): 28 + S(0) = S(28 + 0)</li>
<li>Since 28 + 0 = 28 (established arithmetic fact)</li>
<li>So S(28 + 0) = S(28)</li>
<li>And S(28) = 29</li>
</ol>

<p><strong>Therefore: 28 + 1 = 29. ∎</strong></p>


<h3>380. 28 + 2 = 30</h3>

<ol>
<li>2 = S(1), so 28 + 2 = 28 + S(1)</li>
<li>By rule (b): 28 + S(1) = S(28 + 1)</li>
<li>Since 28 + 1 = 29 (established arithmetic fact)</li>
<li>So S(28 + 1) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 28 + 2 = 30. ∎</strong></p>


<h3>381. 28 + 3 = 31</h3>

<ol>
<li>3 = S(2), so 28 + 3 = 28 + S(2)</li>
<li>By rule (b): 28 + S(2) = S(28 + 2)</li>
<li>Since 28 + 2 = 30 (established arithmetic fact)</li>
<li>So S(28 + 2) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 28 + 3 = 31. ∎</strong></p>


<h3>382. 28 + 4 = 32</h3>

<ol>
<li>4 = S(3), so 28 + 4 = 28 + S(3)</li>
<li>By rule (b): 28 + S(3) = S(28 + 3)</li>
<li>Since 28 + 3 = 31 (established arithmetic fact)</li>
<li>So S(28 + 3) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 28 + 4 = 32. ∎</strong></p>


<h3>383. 28 + 5 = 33</h3>

<ol>
<li>5 = S(4), so 28 + 5 = 28 + S(4)</li>
<li>By rule (b): 28 + S(4) = S(28 + 4)</li>
<li>Since 28 + 4 = 32 (established arithmetic fact)</li>
<li>So S(28 + 4) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 28 + 5 = 33. ∎</strong></p>


<h3>384. 28 + 6 = 34</h3>

<ol>
<li>6 = S(5), so 28 + 6 = 28 + S(5)</li>
<li>By rule (b): 28 + S(5) = S(28 + 5)</li>
<li>Since 28 + 5 = 33 (established arithmetic fact)</li>
<li>So S(28 + 5) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 28 + 6 = 34. ∎</strong></p>


<h3>385. 28 + 7 = 35</h3>

<ol>
<li>7 = S(6), so 28 + 7 = 28 + S(6)</li>
<li>By rule (b): 28 + S(6) = S(28 + 6)</li>
<li>Since 28 + 6 = 34 (established arithmetic fact)</li>
<li>So S(28 + 6) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 28 + 7 = 35. ∎</strong></p>


<h3>386. 28 + 8 = 36</h3>

<ol>
<li>8 = S(7), so 28 + 8 = 28 + S(7)</li>
<li>By rule (b): 28 + S(7) = S(28 + 7)</li>
<li>Since 28 + 7 = 35 (established arithmetic fact)</li>
<li>So S(28 + 7) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 28 + 8 = 36. ∎</strong></p>


<h3>387. 28 + 9 = 37</h3>

<ol>
<li>9 = S(8), so 28 + 9 = 28 + S(8)</li>
<li>By rule (b): 28 + S(8) = S(28 + 8)</li>
<li>Since 28 + 8 = 36 (established arithmetic fact)</li>
<li>So S(28 + 8) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 28 + 9 = 37. ∎</strong></p>


<h3>388. 28 + 10 = 38</h3>

<ol>
<li>10 = S(9), so 28 + 10 = 28 + S(9)</li>
<li>By rule (b): 28 + S(9) = S(28 + 9)</li>
<li>Since 28 + 9 = 37 (established arithmetic fact)</li>
<li>So S(28 + 9) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 28 + 10 = 38. ∎</strong></p>


<h3>389. 28 + 11 = 39</h3>

<ol>
<li>11 = S(10), so 28 + 11 = 28 + S(10)</li>
<li>By rule (b): 28 + S(10) = S(28 + 10)</li>
<li>Since 28 + 10 = 38 (established arithmetic fact)</li>
<li>So S(28 + 10) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 28 + 11 = 39. ∎</strong></p>


<h3>390. 28 + 12 = 40</h3>

<ol>
<li>12 = S(11), so 28 + 12 = 28 + S(11)</li>
<li>By rule (b): 28 + S(11) = S(28 + 11)</li>
<li>Since 28 + 11 = 39 (established arithmetic fact)</li>
<li>So S(28 + 11) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 28 + 12 = 40. ∎</strong></p>


<h3>391. 28 + 13 = 41</h3>

<ol>
<li>13 = S(12), so 28 + 13 = 28 + S(12)</li>
<li>By rule (b): 28 + S(12) = S(28 + 12)</li>
<li>Since 28 + 12 = 40 (established arithmetic fact)</li>
<li>So S(28 + 12) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 28 + 13 = 41. ∎</strong></p>


<h3>392. 28 + 14 = 42</h3>

<ol>
<li>14 = S(13), so 28 + 14 = 28 + S(13)</li>
<li>By rule (b): 28 + S(13) = S(28 + 13)</li>
<li>Since 28 + 13 = 41 (established arithmetic fact)</li>
<li>So S(28 + 13) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 28 + 14 = 42. ∎</strong></p>


<h3>393. 28 + 15 = 43</h3>

<ol>
<li>15 = S(14), so 28 + 15 = 28 + S(14)</li>
<li>By rule (b): 28 + S(14) = S(28 + 14)</li>
<li>Since 28 + 14 = 42 (established arithmetic fact)</li>
<li>So S(28 + 14) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 28 + 15 = 43. ∎</strong></p>


<h3>394. 28 + 16 = 44</h3>

<ol>
<li>16 = S(15), so 28 + 16 = 28 + S(15)</li>
<li>By rule (b): 28 + S(15) = S(28 + 15)</li>
<li>Since 28 + 15 = 43 (established arithmetic fact)</li>
<li>So S(28 + 15) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 28 + 16 = 44. ∎</strong></p>


<h3>395. 28 + 17 = 45</h3>

<ol>
<li>17 = S(16), so 28 + 17 = 28 + S(16)</li>
<li>By rule (b): 28 + S(16) = S(28 + 16)</li>
<li>Since 28 + 16 = 44 (established arithmetic fact)</li>
<li>So S(28 + 16) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 28 + 17 = 45. ∎</strong></p>


<h3>396. 28 + 18 = 46</h3>

<ol>
<li>18 = S(17), so 28 + 18 = 28 + S(17)</li>
<li>By rule (b): 28 + S(17) = S(28 + 17)</li>
<li>Since 28 + 17 = 45 (established arithmetic fact)</li>
<li>So S(28 + 17) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 28 + 18 = 46. ∎</strong></p>


<h3>397. 28 + 19 = 47</h3>

<ol>
<li>19 = S(18), so 28 + 19 = 28 + S(18)</li>
<li>By rule (b): 28 + S(18) = S(28 + 18)</li>
<li>Since 28 + 18 = 46 (established arithmetic fact)</li>
<li>So S(28 + 18) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 28 + 19 = 47. ∎</strong></p>


<h3>398. 28 + 20 = 48</h3>

<ol>
<li>20 = S(19), so 28 + 20 = 28 + S(19)</li>
<li>By rule (b): 28 + S(19) = S(28 + 19)</li>
<li>Since 28 + 19 = 47 (established arithmetic fact)</li>
<li>So S(28 + 19) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 28 + 20 = 48. ∎</strong></p>


<h3>399. 28 + 21 = 49</h3>

<ol>
<li>21 = S(20), so 28 + 21 = 28 + S(20)</li>
<li>By rule (b): 28 + S(20) = S(28 + 20)</li>
<li>Since 28 + 20 = 48 (established arithmetic fact)</li>
<li>So S(28 + 20) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 28 + 21 = 49. ∎</strong></p>


<h3>400. 28 + 22 = 50</h3>

<ol>
<li>22 = S(21), so 28 + 22 = 28 + S(21)</li>
<li>By rule (b): 28 + S(21) = S(28 + 21)</li>
<li>Since 28 + 21 = 49 (established arithmetic fact)</li>
<li>So S(28 + 21) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 28 + 22 = 50. ∎</strong></p>


<h3>401. 28 + 23 = 51</h3>

<ol>
<li>23 = S(22), so 28 + 23 = 28 + S(22)</li>
<li>By rule (b): 28 + S(22) = S(28 + 22)</li>
<li>Since 28 + 22 = 50 (established arithmetic fact)</li>
<li>So S(28 + 22) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 28 + 23 = 51. ∎</strong></p>


<h3>402. 28 + 24 = 52</h3>

<ol>
<li>24 = S(23), so 28 + 24 = 28 + S(23)</li>
<li>By rule (b): 28 + S(23) = S(28 + 23)</li>
<li>Since 28 + 23 = 51 (established arithmetic fact)</li>
<li>So S(28 + 23) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 28 + 24 = 52. ∎</strong></p>


<h3>403. 28 + 25 = 53</h3>

<ol>
<li>25 = S(24), so 28 + 25 = 28 + S(24)</li>
<li>By rule (b): 28 + S(24) = S(28 + 24)</li>
<li>Since 28 + 24 = 52 (established arithmetic fact)</li>
<li>So S(28 + 24) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 28 + 25 = 53. ∎</strong></p>


<h3>404. 28 + 26 = 54</h3>

<ol>
<li>26 = S(25), so 28 + 26 = 28 + S(25)</li>
<li>By rule (b): 28 + S(25) = S(28 + 25)</li>
<li>Since 28 + 25 = 53 (established arithmetic fact)</li>
<li>So S(28 + 25) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 28 + 26 = 54. ∎</strong></p>


<h3>405. 28 + 27 = 55</h3>

<ol>
<li>27 = S(26), so 28 + 27 = 28 + S(26)</li>
<li>By rule (b): 28 + S(26) = S(28 + 26)</li>
<li>Since 28 + 26 = 54 (established arithmetic fact)</li>
<li>So S(28 + 26) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 28 + 27 = 55. ∎</strong></p>


<h3>406. 28 + 28 = 56</h3>

<ol>
<li>28 = S(27), so 28 + 28 = 28 + S(27)</li>
<li>By rule (b): 28 + S(27) = S(28 + 27)</li>
<li>Since 28 + 27 = 55 (established arithmetic fact)</li>
<li>So S(28 + 27) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 28 + 28 = 56. ∎</strong></p>


<h3>407. 29 + 1 = 30</h3>

<ol>
<li>1 = S(0), so 29 + 1 = 29 + S(0)</li>
<li>By rule (b): 29 + S(0) = S(29 + 0)</li>
<li>Since 29 + 0 = 29 (established arithmetic fact)</li>
<li>So S(29 + 0) = S(29)</li>
<li>And S(29) = 30</li>
</ol>

<p><strong>Therefore: 29 + 1 = 30. ∎</strong></p>


<h3>408. 29 + 2 = 31</h3>

<ol>
<li>2 = S(1), so 29 + 2 = 29 + S(1)</li>
<li>By rule (b): 29 + S(1) = S(29 + 1)</li>
<li>Since 29 + 1 = 30 (established arithmetic fact)</li>
<li>So S(29 + 1) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 29 + 2 = 31. ∎</strong></p>


<h3>409. 29 + 3 = 32</h3>

<ol>
<li>3 = S(2), so 29 + 3 = 29 + S(2)</li>
<li>By rule (b): 29 + S(2) = S(29 + 2)</li>
<li>Since 29 + 2 = 31 (established arithmetic fact)</li>
<li>So S(29 + 2) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 29 + 3 = 32. ∎</strong></p>


<h3>410. 29 + 4 = 33</h3>

<ol>
<li>4 = S(3), so 29 + 4 = 29 + S(3)</li>
<li>By rule (b): 29 + S(3) = S(29 + 3)</li>
<li>Since 29 + 3 = 32 (established arithmetic fact)</li>
<li>So S(29 + 3) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 29 + 4 = 33. ∎</strong></p>


<h3>411. 29 + 5 = 34</h3>

<ol>
<li>5 = S(4), so 29 + 5 = 29 + S(4)</li>
<li>By rule (b): 29 + S(4) = S(29 + 4)</li>
<li>Since 29 + 4 = 33 (established arithmetic fact)</li>
<li>So S(29 + 4) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 29 + 5 = 34. ∎</strong></p>


<h3>412. 29 + 6 = 35</h3>

<ol>
<li>6 = S(5), so 29 + 6 = 29 + S(5)</li>
<li>By rule (b): 29 + S(5) = S(29 + 5)</li>
<li>Since 29 + 5 = 34 (established arithmetic fact)</li>
<li>So S(29 + 5) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 29 + 6 = 35. ∎</strong></p>


<h3>413. 29 + 7 = 36</h3>

<ol>
<li>7 = S(6), so 29 + 7 = 29 + S(6)</li>
<li>By rule (b): 29 + S(6) = S(29 + 6)</li>
<li>Since 29 + 6 = 35 (established arithmetic fact)</li>
<li>So S(29 + 6) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 29 + 7 = 36. ∎</strong></p>


<h3>414. 29 + 8 = 37</h3>

<ol>
<li>8 = S(7), so 29 + 8 = 29 + S(7)</li>
<li>By rule (b): 29 + S(7) = S(29 + 7)</li>
<li>Since 29 + 7 = 36 (established arithmetic fact)</li>
<li>So S(29 + 7) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 29 + 8 = 37. ∎</strong></p>


<h3>415. 29 + 9 = 38</h3>

<ol>
<li>9 = S(8), so 29 + 9 = 29 + S(8)</li>
<li>By rule (b): 29 + S(8) = S(29 + 8)</li>
<li>Since 29 + 8 = 37 (established arithmetic fact)</li>
<li>So S(29 + 8) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 29 + 9 = 38. ∎</strong></p>


<h3>416. 29 + 10 = 39</h3>

<ol>
<li>10 = S(9), so 29 + 10 = 29 + S(9)</li>
<li>By rule (b): 29 + S(9) = S(29 + 9)</li>
<li>Since 29 + 9 = 38 (established arithmetic fact)</li>
<li>So S(29 + 9) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 29 + 10 = 39. ∎</strong></p>


<h3>417. 29 + 11 = 40</h3>

<ol>
<li>11 = S(10), so 29 + 11 = 29 + S(10)</li>
<li>By rule (b): 29 + S(10) = S(29 + 10)</li>
<li>Since 29 + 10 = 39 (established arithmetic fact)</li>
<li>So S(29 + 10) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 29 + 11 = 40. ∎</strong></p>


<h3>418. 29 + 12 = 41</h3>

<ol>
<li>12 = S(11), so 29 + 12 = 29 + S(11)</li>
<li>By rule (b): 29 + S(11) = S(29 + 11)</li>
<li>Since 29 + 11 = 40 (established arithmetic fact)</li>
<li>So S(29 + 11) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 29 + 12 = 41. ∎</strong></p>


<h3>419. 29 + 13 = 42</h3>

<ol>
<li>13 = S(12), so 29 + 13 = 29 + S(12)</li>
<li>By rule (b): 29 + S(12) = S(29 + 12)</li>
<li>Since 29 + 12 = 41 (established arithmetic fact)</li>
<li>So S(29 + 12) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 29 + 13 = 42. ∎</strong></p>


<h3>420. 29 + 14 = 43</h3>

<ol>
<li>14 = S(13), so 29 + 14 = 29 + S(13)</li>
<li>By rule (b): 29 + S(13) = S(29 + 13)</li>
<li>Since 29 + 13 = 42 (established arithmetic fact)</li>
<li>So S(29 + 13) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 29 + 14 = 43. ∎</strong></p>


<h3>421. 29 + 15 = 44</h3>

<ol>
<li>15 = S(14), so 29 + 15 = 29 + S(14)</li>
<li>By rule (b): 29 + S(14) = S(29 + 14)</li>
<li>Since 29 + 14 = 43 (established arithmetic fact)</li>
<li>So S(29 + 14) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 29 + 15 = 44. ∎</strong></p>


<h3>422. 29 + 16 = 45</h3>

<ol>
<li>16 = S(15), so 29 + 16 = 29 + S(15)</li>
<li>By rule (b): 29 + S(15) = S(29 + 15)</li>
<li>Since 29 + 15 = 44 (established arithmetic fact)</li>
<li>So S(29 + 15) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 29 + 16 = 45. ∎</strong></p>


<h3>423. 29 + 17 = 46</h3>

<ol>
<li>17 = S(16), so 29 + 17 = 29 + S(16)</li>
<li>By rule (b): 29 + S(16) = S(29 + 16)</li>
<li>Since 29 + 16 = 45 (established arithmetic fact)</li>
<li>So S(29 + 16) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 29 + 17 = 46. ∎</strong></p>


<h3>424. 29 + 18 = 47</h3>

<ol>
<li>18 = S(17), so 29 + 18 = 29 + S(17)</li>
<li>By rule (b): 29 + S(17) = S(29 + 17)</li>
<li>Since 29 + 17 = 46 (established arithmetic fact)</li>
<li>So S(29 + 17) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 29 + 18 = 47. ∎</strong></p>


<h3>425. 29 + 19 = 48</h3>

<ol>
<li>19 = S(18), so 29 + 19 = 29 + S(18)</li>
<li>By rule (b): 29 + S(18) = S(29 + 18)</li>
<li>Since 29 + 18 = 47 (established arithmetic fact)</li>
<li>So S(29 + 18) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 29 + 19 = 48. ∎</strong></p>


<h3>426. 29 + 20 = 49</h3>

<ol>
<li>20 = S(19), so 29 + 20 = 29 + S(19)</li>
<li>By rule (b): 29 + S(19) = S(29 + 19)</li>
<li>Since 29 + 19 = 48 (established arithmetic fact)</li>
<li>So S(29 + 19) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 29 + 20 = 49. ∎</strong></p>


<h3>427. 29 + 21 = 50</h3>

<ol>
<li>21 = S(20), so 29 + 21 = 29 + S(20)</li>
<li>By rule (b): 29 + S(20) = S(29 + 20)</li>
<li>Since 29 + 20 = 49 (established arithmetic fact)</li>
<li>So S(29 + 20) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 29 + 21 = 50. ∎</strong></p>


<h3>428. 29 + 22 = 51</h3>

<ol>
<li>22 = S(21), so 29 + 22 = 29 + S(21)</li>
<li>By rule (b): 29 + S(21) = S(29 + 21)</li>
<li>Since 29 + 21 = 50 (established arithmetic fact)</li>
<li>So S(29 + 21) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 29 + 22 = 51. ∎</strong></p>


<h3>429. 29 + 23 = 52</h3>

<ol>
<li>23 = S(22), so 29 + 23 = 29 + S(22)</li>
<li>By rule (b): 29 + S(22) = S(29 + 22)</li>
<li>Since 29 + 22 = 51 (established arithmetic fact)</li>
<li>So S(29 + 22) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 29 + 23 = 52. ∎</strong></p>


<h3>430. 29 + 24 = 53</h3>

<ol>
<li>24 = S(23), so 29 + 24 = 29 + S(23)</li>
<li>By rule (b): 29 + S(23) = S(29 + 23)</li>
<li>Since 29 + 23 = 52 (established arithmetic fact)</li>
<li>So S(29 + 23) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 29 + 24 = 53. ∎</strong></p>


<h3>431. 29 + 25 = 54</h3>

<ol>
<li>25 = S(24), so 29 + 25 = 29 + S(24)</li>
<li>By rule (b): 29 + S(24) = S(29 + 24)</li>
<li>Since 29 + 24 = 53 (established arithmetic fact)</li>
<li>So S(29 + 24) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 29 + 25 = 54. ∎</strong></p>


<h3>432. 29 + 26 = 55</h3>

<ol>
<li>26 = S(25), so 29 + 26 = 29 + S(25)</li>
<li>By rule (b): 29 + S(25) = S(29 + 25)</li>
<li>Since 29 + 25 = 54 (established arithmetic fact)</li>
<li>So S(29 + 25) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 29 + 26 = 55. ∎</strong></p>


<h3>433. 29 + 27 = 56</h3>

<ol>
<li>27 = S(26), so 29 + 27 = 29 + S(26)</li>
<li>By rule (b): 29 + S(26) = S(29 + 26)</li>
<li>Since 29 + 26 = 55 (established arithmetic fact)</li>
<li>So S(29 + 26) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 29 + 27 = 56. ∎</strong></p>


<h3>434. 29 + 28 = 57</h3>

<ol>
<li>28 = S(27), so 29 + 28 = 29 + S(27)</li>
<li>By rule (b): 29 + S(27) = S(29 + 27)</li>
<li>Since 29 + 27 = 56 (established arithmetic fact)</li>
<li>So S(29 + 27) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 29 + 28 = 57. ∎</strong></p>


<h3>435. 29 + 29 = 58</h3>

<ol>
<li>29 = S(28), so 29 + 29 = 29 + S(28)</li>
<li>By rule (b): 29 + S(28) = S(29 + 28)</li>
<li>Since 29 + 28 = 57 (established arithmetic fact)</li>
<li>So S(29 + 28) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 29 + 29 = 58. ∎</strong></p>


<h3>436. 30 + 1 = 31</h3>

<ol>
<li>1 = S(0), so 30 + 1 = 30 + S(0)</li>
<li>By rule (b): 30 + S(0) = S(30 + 0)</li>
<li>Since 30 + 0 = 30 (established arithmetic fact)</li>
<li>So S(30 + 0) = S(30)</li>
<li>And S(30) = 31</li>
</ol>

<p><strong>Therefore: 30 + 1 = 31. ∎</strong></p>


<h3>437. 30 + 2 = 32</h3>

<ol>
<li>2 = S(1), so 30 + 2 = 30 + S(1)</li>
<li>By rule (b): 30 + S(1) = S(30 + 1)</li>
<li>Since 30 + 1 = 31 (established arithmetic fact)</li>
<li>So S(30 + 1) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 30 + 2 = 32. ∎</strong></p>


<h3>438. 30 + 3 = 33</h3>

<ol>
<li>3 = S(2), so 30 + 3 = 30 + S(2)</li>
<li>By rule (b): 30 + S(2) = S(30 + 2)</li>
<li>Since 30 + 2 = 32 (established arithmetic fact)</li>
<li>So S(30 + 2) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 30 + 3 = 33. ∎</strong></p>


<h3>439. 30 + 4 = 34</h3>

<ol>
<li>4 = S(3), so 30 + 4 = 30 + S(3)</li>
<li>By rule (b): 30 + S(3) = S(30 + 3)</li>
<li>Since 30 + 3 = 33 (established arithmetic fact)</li>
<li>So S(30 + 3) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 30 + 4 = 34. ∎</strong></p>


<h3>440. 30 + 5 = 35</h3>

<ol>
<li>5 = S(4), so 30 + 5 = 30 + S(4)</li>
<li>By rule (b): 30 + S(4) = S(30 + 4)</li>
<li>Since 30 + 4 = 34 (established arithmetic fact)</li>
<li>So S(30 + 4) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 30 + 5 = 35. ∎</strong></p>


<h3>441. 30 + 6 = 36</h3>

<ol>
<li>6 = S(5), so 30 + 6 = 30 + S(5)</li>
<li>By rule (b): 30 + S(5) = S(30 + 5)</li>
<li>Since 30 + 5 = 35 (established arithmetic fact)</li>
<li>So S(30 + 5) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 30 + 6 = 36. ∎</strong></p>


<h3>442. 30 + 7 = 37</h3>

<ol>
<li>7 = S(6), so 30 + 7 = 30 + S(6)</li>
<li>By rule (b): 30 + S(6) = S(30 + 6)</li>
<li>Since 30 + 6 = 36 (established arithmetic fact)</li>
<li>So S(30 + 6) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 30 + 7 = 37. ∎</strong></p>


<h3>443. 30 + 8 = 38</h3>

<ol>
<li>8 = S(7), so 30 + 8 = 30 + S(7)</li>
<li>By rule (b): 30 + S(7) = S(30 + 7)</li>
<li>Since 30 + 7 = 37 (established arithmetic fact)</li>
<li>So S(30 + 7) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 30 + 8 = 38. ∎</strong></p>


<h3>444. 30 + 9 = 39</h3>

<ol>
<li>9 = S(8), so 30 + 9 = 30 + S(8)</li>
<li>By rule (b): 30 + S(8) = S(30 + 8)</li>
<li>Since 30 + 8 = 38 (established arithmetic fact)</li>
<li>So S(30 + 8) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 30 + 9 = 39. ∎</strong></p>


<h3>445. 30 + 10 = 40</h3>

<ol>
<li>10 = S(9), so 30 + 10 = 30 + S(9)</li>
<li>By rule (b): 30 + S(9) = S(30 + 9)</li>
<li>Since 30 + 9 = 39 (established arithmetic fact)</li>
<li>So S(30 + 9) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 30 + 10 = 40. ∎</strong></p>


<h3>446. 30 + 11 = 41</h3>

<ol>
<li>11 = S(10), so 30 + 11 = 30 + S(10)</li>
<li>By rule (b): 30 + S(10) = S(30 + 10)</li>
<li>Since 30 + 10 = 40 (established arithmetic fact)</li>
<li>So S(30 + 10) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 30 + 11 = 41. ∎</strong></p>


<h3>447. 30 + 12 = 42</h3>

<ol>
<li>12 = S(11), so 30 + 12 = 30 + S(11)</li>
<li>By rule (b): 30 + S(11) = S(30 + 11)</li>
<li>Since 30 + 11 = 41 (established arithmetic fact)</li>
<li>So S(30 + 11) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 30 + 12 = 42. ∎</strong></p>


<h3>448. 30 + 13 = 43</h3>

<ol>
<li>13 = S(12), so 30 + 13 = 30 + S(12)</li>
<li>By rule (b): 30 + S(12) = S(30 + 12)</li>
<li>Since 30 + 12 = 42 (established arithmetic fact)</li>
<li>So S(30 + 12) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 30 + 13 = 43. ∎</strong></p>


<h3>449. 30 + 14 = 44</h3>

<ol>
<li>14 = S(13), so 30 + 14 = 30 + S(13)</li>
<li>By rule (b): 30 + S(13) = S(30 + 13)</li>
<li>Since 30 + 13 = 43 (established arithmetic fact)</li>
<li>So S(30 + 13) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 30 + 14 = 44. ∎</strong></p>


<h3>450. 30 + 15 = 45</h3>

<ol>
<li>15 = S(14), so 30 + 15 = 30 + S(14)</li>
<li>By rule (b): 30 + S(14) = S(30 + 14)</li>
<li>Since 30 + 14 = 44 (established arithmetic fact)</li>
<li>So S(30 + 14) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 30 + 15 = 45. ∎</strong></p>


<h3>451. 30 + 16 = 46</h3>

<ol>
<li>16 = S(15), so 30 + 16 = 30 + S(15)</li>
<li>By rule (b): 30 + S(15) = S(30 + 15)</li>
<li>Since 30 + 15 = 45 (established arithmetic fact)</li>
<li>So S(30 + 15) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 30 + 16 = 46. ∎</strong></p>


<h3>452. 30 + 17 = 47</h3>

<ol>
<li>17 = S(16), so 30 + 17 = 30 + S(16)</li>
<li>By rule (b): 30 + S(16) = S(30 + 16)</li>
<li>Since 30 + 16 = 46 (established arithmetic fact)</li>
<li>So S(30 + 16) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 30 + 17 = 47. ∎</strong></p>


<h3>453. 30 + 18 = 48</h3>

<ol>
<li>18 = S(17), so 30 + 18 = 30 + S(17)</li>
<li>By rule (b): 30 + S(17) = S(30 + 17)</li>
<li>Since 30 + 17 = 47 (established arithmetic fact)</li>
<li>So S(30 + 17) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 30 + 18 = 48. ∎</strong></p>


<h3>454. 30 + 19 = 49</h3>

<ol>
<li>19 = S(18), so 30 + 19 = 30 + S(18)</li>
<li>By rule (b): 30 + S(18) = S(30 + 18)</li>
<li>Since 30 + 18 = 48 (established arithmetic fact)</li>
<li>So S(30 + 18) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 30 + 19 = 49. ∎</strong></p>


<h3>455. 30 + 20 = 50</h3>

<ol>
<li>20 = S(19), so 30 + 20 = 30 + S(19)</li>
<li>By rule (b): 30 + S(19) = S(30 + 19)</li>
<li>Since 30 + 19 = 49 (established arithmetic fact)</li>
<li>So S(30 + 19) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 30 + 20 = 50. ∎</strong></p>


<h3>456. 30 + 21 = 51</h3>

<ol>
<li>21 = S(20), so 30 + 21 = 30 + S(20)</li>
<li>By rule (b): 30 + S(20) = S(30 + 20)</li>
<li>Since 30 + 20 = 50 (established arithmetic fact)</li>
<li>So S(30 + 20) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 30 + 21 = 51. ∎</strong></p>


<h3>457. 30 + 22 = 52</h3>

<ol>
<li>22 = S(21), so 30 + 22 = 30 + S(21)</li>
<li>By rule (b): 30 + S(21) = S(30 + 21)</li>
<li>Since 30 + 21 = 51 (established arithmetic fact)</li>
<li>So S(30 + 21) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 30 + 22 = 52. ∎</strong></p>


<h3>458. 30 + 23 = 53</h3>

<ol>
<li>23 = S(22), so 30 + 23 = 30 + S(22)</li>
<li>By rule (b): 30 + S(22) = S(30 + 22)</li>
<li>Since 30 + 22 = 52 (established arithmetic fact)</li>
<li>So S(30 + 22) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 30 + 23 = 53. ∎</strong></p>


<h3>459. 30 + 24 = 54</h3>

<ol>
<li>24 = S(23), so 30 + 24 = 30 + S(23)</li>
<li>By rule (b): 30 + S(23) = S(30 + 23)</li>
<li>Since 30 + 23 = 53 (established arithmetic fact)</li>
<li>So S(30 + 23) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 30 + 24 = 54. ∎</strong></p>


<h3>460. 30 + 25 = 55</h3>

<ol>
<li>25 = S(24), so 30 + 25 = 30 + S(24)</li>
<li>By rule (b): 30 + S(24) = S(30 + 24)</li>
<li>Since 30 + 24 = 54 (established arithmetic fact)</li>
<li>So S(30 + 24) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 30 + 25 = 55. ∎</strong></p>


<h3>461. 30 + 26 = 56</h3>

<ol>
<li>26 = S(25), so 30 + 26 = 30 + S(25)</li>
<li>By rule (b): 30 + S(25) = S(30 + 25)</li>
<li>Since 30 + 25 = 55 (established arithmetic fact)</li>
<li>So S(30 + 25) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 30 + 26 = 56. ∎</strong></p>


<h3>462. 30 + 27 = 57</h3>

<ol>
<li>27 = S(26), so 30 + 27 = 30 + S(26)</li>
<li>By rule (b): 30 + S(26) = S(30 + 26)</li>
<li>Since 30 + 26 = 56 (established arithmetic fact)</li>
<li>So S(30 + 26) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 30 + 27 = 57. ∎</strong></p>


<h3>463. 30 + 28 = 58</h3>

<ol>
<li>28 = S(27), so 30 + 28 = 30 + S(27)</li>
<li>By rule (b): 30 + S(27) = S(30 + 27)</li>
<li>Since 30 + 27 = 57 (established arithmetic fact)</li>
<li>So S(30 + 27) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 30 + 28 = 58. ∎</strong></p>


<h3>464. 30 + 29 = 59</h3>

<ol>
<li>29 = S(28), so 30 + 29 = 30 + S(28)</li>
<li>By rule (b): 30 + S(28) = S(30 + 28)</li>
<li>Since 30 + 28 = 58 (established arithmetic fact)</li>
<li>So S(30 + 28) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 30 + 29 = 59. ∎</strong></p>


<h3>465. 30 + 30 = 60</h3>

<ol>
<li>30 = S(29), so 30 + 30 = 30 + S(29)</li>
<li>By rule (b): 30 + S(29) = S(30 + 29)</li>
<li>Since 30 + 29 = 59 (established arithmetic fact)</li>
<li>So S(30 + 29) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 30 + 30 = 60. ∎</strong></p>


<h3>466. 31 + 1 = 32</h3>

<ol>
<li>1 = S(0), so 31 + 1 = 31 + S(0)</li>
<li>By rule (b): 31 + S(0) = S(31 + 0)</li>
<li>Since 31 + 0 = 31 (established arithmetic fact)</li>
<li>So S(31 + 0) = S(31)</li>
<li>And S(31) = 32</li>
</ol>

<p><strong>Therefore: 31 + 1 = 32. ∎</strong></p>


<h3>467. 31 + 2 = 33</h3>

<ol>
<li>2 = S(1), so 31 + 2 = 31 + S(1)</li>
<li>By rule (b): 31 + S(1) = S(31 + 1)</li>
<li>Since 31 + 1 = 32 (established arithmetic fact)</li>
<li>So S(31 + 1) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 31 + 2 = 33. ∎</strong></p>


<h3>468. 31 + 3 = 34</h3>

<ol>
<li>3 = S(2), so 31 + 3 = 31 + S(2)</li>
<li>By rule (b): 31 + S(2) = S(31 + 2)</li>
<li>Since 31 + 2 = 33 (established arithmetic fact)</li>
<li>So S(31 + 2) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 31 + 3 = 34. ∎</strong></p>


<h3>469. 31 + 4 = 35</h3>

<ol>
<li>4 = S(3), so 31 + 4 = 31 + S(3)</li>
<li>By rule (b): 31 + S(3) = S(31 + 3)</li>
<li>Since 31 + 3 = 34 (established arithmetic fact)</li>
<li>So S(31 + 3) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 31 + 4 = 35. ∎</strong></p>


<h3>470. 31 + 5 = 36</h3>

<ol>
<li>5 = S(4), so 31 + 5 = 31 + S(4)</li>
<li>By rule (b): 31 + S(4) = S(31 + 4)</li>
<li>Since 31 + 4 = 35 (established arithmetic fact)</li>
<li>So S(31 + 4) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 31 + 5 = 36. ∎</strong></p>


<h3>471. 31 + 6 = 37</h3>

<ol>
<li>6 = S(5), so 31 + 6 = 31 + S(5)</li>
<li>By rule (b): 31 + S(5) = S(31 + 5)</li>
<li>Since 31 + 5 = 36 (established arithmetic fact)</li>
<li>So S(31 + 5) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 31 + 6 = 37. ∎</strong></p>


<h3>472. 31 + 7 = 38</h3>

<ol>
<li>7 = S(6), so 31 + 7 = 31 + S(6)</li>
<li>By rule (b): 31 + S(6) = S(31 + 6)</li>
<li>Since 31 + 6 = 37 (established arithmetic fact)</li>
<li>So S(31 + 6) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 31 + 7 = 38. ∎</strong></p>


<h3>473. 31 + 8 = 39</h3>

<ol>
<li>8 = S(7), so 31 + 8 = 31 + S(7)</li>
<li>By rule (b): 31 + S(7) = S(31 + 7)</li>
<li>Since 31 + 7 = 38 (established arithmetic fact)</li>
<li>So S(31 + 7) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 31 + 8 = 39. ∎</strong></p>


<h3>474. 31 + 9 = 40</h3>

<ol>
<li>9 = S(8), so 31 + 9 = 31 + S(8)</li>
<li>By rule (b): 31 + S(8) = S(31 + 8)</li>
<li>Since 31 + 8 = 39 (established arithmetic fact)</li>
<li>So S(31 + 8) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 31 + 9 = 40. ∎</strong></p>


<h3>475. 31 + 10 = 41</h3>

<ol>
<li>10 = S(9), so 31 + 10 = 31 + S(9)</li>
<li>By rule (b): 31 + S(9) = S(31 + 9)</li>
<li>Since 31 + 9 = 40 (established arithmetic fact)</li>
<li>So S(31 + 9) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 31 + 10 = 41. ∎</strong></p>


<h3>476. 31 + 11 = 42</h3>

<ol>
<li>11 = S(10), so 31 + 11 = 31 + S(10)</li>
<li>By rule (b): 31 + S(10) = S(31 + 10)</li>
<li>Since 31 + 10 = 41 (established arithmetic fact)</li>
<li>So S(31 + 10) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 31 + 11 = 42. ∎</strong></p>


<h3>477. 31 + 12 = 43</h3>

<ol>
<li>12 = S(11), so 31 + 12 = 31 + S(11)</li>
<li>By rule (b): 31 + S(11) = S(31 + 11)</li>
<li>Since 31 + 11 = 42 (established arithmetic fact)</li>
<li>So S(31 + 11) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 31 + 12 = 43. ∎</strong></p>


<h3>478. 31 + 13 = 44</h3>

<ol>
<li>13 = S(12), so 31 + 13 = 31 + S(12)</li>
<li>By rule (b): 31 + S(12) = S(31 + 12)</li>
<li>Since 31 + 12 = 43 (established arithmetic fact)</li>
<li>So S(31 + 12) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 31 + 13 = 44. ∎</strong></p>


<h3>479. 31 + 14 = 45</h3>

<ol>
<li>14 = S(13), so 31 + 14 = 31 + S(13)</li>
<li>By rule (b): 31 + S(13) = S(31 + 13)</li>
<li>Since 31 + 13 = 44 (established arithmetic fact)</li>
<li>So S(31 + 13) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 31 + 14 = 45. ∎</strong></p>


<h3>480. 31 + 15 = 46</h3>

<ol>
<li>15 = S(14), so 31 + 15 = 31 + S(14)</li>
<li>By rule (b): 31 + S(14) = S(31 + 14)</li>
<li>Since 31 + 14 = 45 (established arithmetic fact)</li>
<li>So S(31 + 14) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 31 + 15 = 46. ∎</strong></p>


<h3>481. 31 + 16 = 47</h3>

<ol>
<li>16 = S(15), so 31 + 16 = 31 + S(15)</li>
<li>By rule (b): 31 + S(15) = S(31 + 15)</li>
<li>Since 31 + 15 = 46 (established arithmetic fact)</li>
<li>So S(31 + 15) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 31 + 16 = 47. ∎</strong></p>


<h3>482. 31 + 17 = 48</h3>

<ol>
<li>17 = S(16), so 31 + 17 = 31 + S(16)</li>
<li>By rule (b): 31 + S(16) = S(31 + 16)</li>
<li>Since 31 + 16 = 47 (established arithmetic fact)</li>
<li>So S(31 + 16) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 31 + 17 = 48. ∎</strong></p>


<h3>483. 31 + 18 = 49</h3>

<ol>
<li>18 = S(17), so 31 + 18 = 31 + S(17)</li>
<li>By rule (b): 31 + S(17) = S(31 + 17)</li>
<li>Since 31 + 17 = 48 (established arithmetic fact)</li>
<li>So S(31 + 17) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 31 + 18 = 49. ∎</strong></p>


<h3>484. 31 + 19 = 50</h3>

<ol>
<li>19 = S(18), so 31 + 19 = 31 + S(18)</li>
<li>By rule (b): 31 + S(18) = S(31 + 18)</li>
<li>Since 31 + 18 = 49 (established arithmetic fact)</li>
<li>So S(31 + 18) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 31 + 19 = 50. ∎</strong></p>


<h3>485. 31 + 20 = 51</h3>

<ol>
<li>20 = S(19), so 31 + 20 = 31 + S(19)</li>
<li>By rule (b): 31 + S(19) = S(31 + 19)</li>
<li>Since 31 + 19 = 50 (established arithmetic fact)</li>
<li>So S(31 + 19) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 31 + 20 = 51. ∎</strong></p>


<h3>486. 31 + 21 = 52</h3>

<ol>
<li>21 = S(20), so 31 + 21 = 31 + S(20)</li>
<li>By rule (b): 31 + S(20) = S(31 + 20)</li>
<li>Since 31 + 20 = 51 (established arithmetic fact)</li>
<li>So S(31 + 20) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 31 + 21 = 52. ∎</strong></p>


<h3>487. 31 + 22 = 53</h3>

<ol>
<li>22 = S(21), so 31 + 22 = 31 + S(21)</li>
<li>By rule (b): 31 + S(21) = S(31 + 21)</li>
<li>Since 31 + 21 = 52 (established arithmetic fact)</li>
<li>So S(31 + 21) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 31 + 22 = 53. ∎</strong></p>


<h3>488. 31 + 23 = 54</h3>

<ol>
<li>23 = S(22), so 31 + 23 = 31 + S(22)</li>
<li>By rule (b): 31 + S(22) = S(31 + 22)</li>
<li>Since 31 + 22 = 53 (established arithmetic fact)</li>
<li>So S(31 + 22) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 31 + 23 = 54. ∎</strong></p>


<h3>489. 31 + 24 = 55</h3>

<ol>
<li>24 = S(23), so 31 + 24 = 31 + S(23)</li>
<li>By rule (b): 31 + S(23) = S(31 + 23)</li>
<li>Since 31 + 23 = 54 (established arithmetic fact)</li>
<li>So S(31 + 23) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 31 + 24 = 55. ∎</strong></p>


<h3>490. 31 + 25 = 56</h3>

<ol>
<li>25 = S(24), so 31 + 25 = 31 + S(24)</li>
<li>By rule (b): 31 + S(24) = S(31 + 24)</li>
<li>Since 31 + 24 = 55 (established arithmetic fact)</li>
<li>So S(31 + 24) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 31 + 25 = 56. ∎</strong></p>


<h3>491. 31 + 26 = 57</h3>

<ol>
<li>26 = S(25), so 31 + 26 = 31 + S(25)</li>
<li>By rule (b): 31 + S(25) = S(31 + 25)</li>
<li>Since 31 + 25 = 56 (established arithmetic fact)</li>
<li>So S(31 + 25) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 31 + 26 = 57. ∎</strong></p>


<h3>492. 31 + 27 = 58</h3>

<ol>
<li>27 = S(26), so 31 + 27 = 31 + S(26)</li>
<li>By rule (b): 31 + S(26) = S(31 + 26)</li>
<li>Since 31 + 26 = 57 (established arithmetic fact)</li>
<li>So S(31 + 26) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 31 + 27 = 58. ∎</strong></p>


<h3>493. 31 + 28 = 59</h3>

<ol>
<li>28 = S(27), so 31 + 28 = 31 + S(27)</li>
<li>By rule (b): 31 + S(27) = S(31 + 27)</li>
<li>Since 31 + 27 = 58 (established arithmetic fact)</li>
<li>So S(31 + 27) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 31 + 28 = 59. ∎</strong></p>


<h3>494. 31 + 29 = 60</h3>

<ol>
<li>29 = S(28), so 31 + 29 = 31 + S(28)</li>
<li>By rule (b): 31 + S(28) = S(31 + 28)</li>
<li>Since 31 + 28 = 59 (established arithmetic fact)</li>
<li>So S(31 + 28) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 31 + 29 = 60. ∎</strong></p>


<h3>495. 31 + 30 = 61</h3>

<ol>
<li>30 = S(29), so 31 + 30 = 31 + S(29)</li>
<li>By rule (b): 31 + S(29) = S(31 + 29)</li>
<li>Since 31 + 29 = 60 (established arithmetic fact)</li>
<li>So S(31 + 29) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 31 + 30 = 61. ∎</strong></p>


<h3>496. 31 + 31 = 62</h3>

<ol>
<li>31 = S(30), so 31 + 31 = 31 + S(30)</li>
<li>By rule (b): 31 + S(30) = S(31 + 30)</li>
<li>Since 31 + 30 = 61 (established arithmetic fact)</li>
<li>So S(31 + 30) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 31 + 31 = 62. ∎</strong></p>


<h3>497. 32 + 1 = 33</h3>

<ol>
<li>1 = S(0), so 32 + 1 = 32 + S(0)</li>
<li>By rule (b): 32 + S(0) = S(32 + 0)</li>
<li>Since 32 + 0 = 32 (established arithmetic fact)</li>
<li>So S(32 + 0) = S(32)</li>
<li>And S(32) = 33</li>
</ol>

<p><strong>Therefore: 32 + 1 = 33. ∎</strong></p>


<h3>498. 32 + 2 = 34</h3>

<ol>
<li>2 = S(1), so 32 + 2 = 32 + S(1)</li>
<li>By rule (b): 32 + S(1) = S(32 + 1)</li>
<li>Since 32 + 1 = 33 (established arithmetic fact)</li>
<li>So S(32 + 1) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 32 + 2 = 34. ∎</strong></p>


<h3>499. 32 + 3 = 35</h3>

<ol>
<li>3 = S(2), so 32 + 3 = 32 + S(2)</li>
<li>By rule (b): 32 + S(2) = S(32 + 2)</li>
<li>Since 32 + 2 = 34 (established arithmetic fact)</li>
<li>So S(32 + 2) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 32 + 3 = 35. ∎</strong></p>


<h3>500. 32 + 4 = 36</h3>

<ol>
<li>4 = S(3), so 32 + 4 = 32 + S(3)</li>
<li>By rule (b): 32 + S(3) = S(32 + 3)</li>
<li>Since 32 + 3 = 35 (established arithmetic fact)</li>
<li>So S(32 + 3) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 32 + 4 = 36. ∎</strong></p>


<h3>501. 32 + 5 = 37</h3>

<ol>
<li>5 = S(4), so 32 + 5 = 32 + S(4)</li>
<li>By rule (b): 32 + S(4) = S(32 + 4)</li>
<li>Since 32 + 4 = 36 (established arithmetic fact)</li>
<li>So S(32 + 4) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 32 + 5 = 37. ∎</strong></p>


<h3>502. 32 + 6 = 38</h3>

<ol>
<li>6 = S(5), so 32 + 6 = 32 + S(5)</li>
<li>By rule (b): 32 + S(5) = S(32 + 5)</li>
<li>Since 32 + 5 = 37 (established arithmetic fact)</li>
<li>So S(32 + 5) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 32 + 6 = 38. ∎</strong></p>


<h3>503. 32 + 7 = 39</h3>

<ol>
<li>7 = S(6), so 32 + 7 = 32 + S(6)</li>
<li>By rule (b): 32 + S(6) = S(32 + 6)</li>
<li>Since 32 + 6 = 38 (established arithmetic fact)</li>
<li>So S(32 + 6) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 32 + 7 = 39. ∎</strong></p>


<h3>504. 32 + 8 = 40</h3>

<ol>
<li>8 = S(7), so 32 + 8 = 32 + S(7)</li>
<li>By rule (b): 32 + S(7) = S(32 + 7)</li>
<li>Since 32 + 7 = 39 (established arithmetic fact)</li>
<li>So S(32 + 7) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 32 + 8 = 40. ∎</strong></p>


<h3>505. 32 + 9 = 41</h3>

<ol>
<li>9 = S(8), so 32 + 9 = 32 + S(8)</li>
<li>By rule (b): 32 + S(8) = S(32 + 8)</li>
<li>Since 32 + 8 = 40 (established arithmetic fact)</li>
<li>So S(32 + 8) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 32 + 9 = 41. ∎</strong></p>


<h3>506. 32 + 10 = 42</h3>

<ol>
<li>10 = S(9), so 32 + 10 = 32 + S(9)</li>
<li>By rule (b): 32 + S(9) = S(32 + 9)</li>
<li>Since 32 + 9 = 41 (established arithmetic fact)</li>
<li>So S(32 + 9) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 32 + 10 = 42. ∎</strong></p>


<h3>507. 32 + 11 = 43</h3>

<ol>
<li>11 = S(10), so 32 + 11 = 32 + S(10)</li>
<li>By rule (b): 32 + S(10) = S(32 + 10)</li>
<li>Since 32 + 10 = 42 (established arithmetic fact)</li>
<li>So S(32 + 10) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 32 + 11 = 43. ∎</strong></p>


<h3>508. 32 + 12 = 44</h3>

<ol>
<li>12 = S(11), so 32 + 12 = 32 + S(11)</li>
<li>By rule (b): 32 + S(11) = S(32 + 11)</li>
<li>Since 32 + 11 = 43 (established arithmetic fact)</li>
<li>So S(32 + 11) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 32 + 12 = 44. ∎</strong></p>


<h3>509. 32 + 13 = 45</h3>

<ol>
<li>13 = S(12), so 32 + 13 = 32 + S(12)</li>
<li>By rule (b): 32 + S(12) = S(32 + 12)</li>
<li>Since 32 + 12 = 44 (established arithmetic fact)</li>
<li>So S(32 + 12) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 32 + 13 = 45. ∎</strong></p>


<h3>510. 32 + 14 = 46</h3>

<ol>
<li>14 = S(13), so 32 + 14 = 32 + S(13)</li>
<li>By rule (b): 32 + S(13) = S(32 + 13)</li>
<li>Since 32 + 13 = 45 (established arithmetic fact)</li>
<li>So S(32 + 13) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 32 + 14 = 46. ∎</strong></p>


<h3>511. 32 + 15 = 47</h3>

<ol>
<li>15 = S(14), so 32 + 15 = 32 + S(14)</li>
<li>By rule (b): 32 + S(14) = S(32 + 14)</li>
<li>Since 32 + 14 = 46 (established arithmetic fact)</li>
<li>So S(32 + 14) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 32 + 15 = 47. ∎</strong></p>


<h3>512. 32 + 16 = 48</h3>

<ol>
<li>16 = S(15), so 32 + 16 = 32 + S(15)</li>
<li>By rule (b): 32 + S(15) = S(32 + 15)</li>
<li>Since 32 + 15 = 47 (established arithmetic fact)</li>
<li>So S(32 + 15) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 32 + 16 = 48. ∎</strong></p>


<h3>513. 32 + 17 = 49</h3>

<ol>
<li>17 = S(16), so 32 + 17 = 32 + S(16)</li>
<li>By rule (b): 32 + S(16) = S(32 + 16)</li>
<li>Since 32 + 16 = 48 (established arithmetic fact)</li>
<li>So S(32 + 16) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 32 + 17 = 49. ∎</strong></p>


<h3>514. 32 + 18 = 50</h3>

<ol>
<li>18 = S(17), so 32 + 18 = 32 + S(17)</li>
<li>By rule (b): 32 + S(17) = S(32 + 17)</li>
<li>Since 32 + 17 = 49 (established arithmetic fact)</li>
<li>So S(32 + 17) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 32 + 18 = 50. ∎</strong></p>


<h3>515. 32 + 19 = 51</h3>

<ol>
<li>19 = S(18), so 32 + 19 = 32 + S(18)</li>
<li>By rule (b): 32 + S(18) = S(32 + 18)</li>
<li>Since 32 + 18 = 50 (established arithmetic fact)</li>
<li>So S(32 + 18) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 32 + 19 = 51. ∎</strong></p>


<h3>516. 32 + 20 = 52</h3>

<ol>
<li>20 = S(19), so 32 + 20 = 32 + S(19)</li>
<li>By rule (b): 32 + S(19) = S(32 + 19)</li>
<li>Since 32 + 19 = 51 (established arithmetic fact)</li>
<li>So S(32 + 19) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 32 + 20 = 52. ∎</strong></p>


<h3>517. 32 + 21 = 53</h3>

<ol>
<li>21 = S(20), so 32 + 21 = 32 + S(20)</li>
<li>By rule (b): 32 + S(20) = S(32 + 20)</li>
<li>Since 32 + 20 = 52 (established arithmetic fact)</li>
<li>So S(32 + 20) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 32 + 21 = 53. ∎</strong></p>


<h3>518. 32 + 22 = 54</h3>

<ol>
<li>22 = S(21), so 32 + 22 = 32 + S(21)</li>
<li>By rule (b): 32 + S(21) = S(32 + 21)</li>
<li>Since 32 + 21 = 53 (established arithmetic fact)</li>
<li>So S(32 + 21) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 32 + 22 = 54. ∎</strong></p>


<h3>519. 32 + 23 = 55</h3>

<ol>
<li>23 = S(22), so 32 + 23 = 32 + S(22)</li>
<li>By rule (b): 32 + S(22) = S(32 + 22)</li>
<li>Since 32 + 22 = 54 (established arithmetic fact)</li>
<li>So S(32 + 22) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 32 + 23 = 55. ∎</strong></p>


<h3>520. 32 + 24 = 56</h3>

<ol>
<li>24 = S(23), so 32 + 24 = 32 + S(23)</li>
<li>By rule (b): 32 + S(23) = S(32 + 23)</li>
<li>Since 32 + 23 = 55 (established arithmetic fact)</li>
<li>So S(32 + 23) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 32 + 24 = 56. ∎</strong></p>


<h3>521. 32 + 25 = 57</h3>

<ol>
<li>25 = S(24), so 32 + 25 = 32 + S(24)</li>
<li>By rule (b): 32 + S(24) = S(32 + 24)</li>
<li>Since 32 + 24 = 56 (established arithmetic fact)</li>
<li>So S(32 + 24) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 32 + 25 = 57. ∎</strong></p>


<h3>522. 32 + 26 = 58</h3>

<ol>
<li>26 = S(25), so 32 + 26 = 32 + S(25)</li>
<li>By rule (b): 32 + S(25) = S(32 + 25)</li>
<li>Since 32 + 25 = 57 (established arithmetic fact)</li>
<li>So S(32 + 25) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 32 + 26 = 58. ∎</strong></p>


<h3>523. 32 + 27 = 59</h3>

<ol>
<li>27 = S(26), so 32 + 27 = 32 + S(26)</li>
<li>By rule (b): 32 + S(26) = S(32 + 26)</li>
<li>Since 32 + 26 = 58 (established arithmetic fact)</li>
<li>So S(32 + 26) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 32 + 27 = 59. ∎</strong></p>


<h3>524. 32 + 28 = 60</h3>

<ol>
<li>28 = S(27), so 32 + 28 = 32 + S(27)</li>
<li>By rule (b): 32 + S(27) = S(32 + 27)</li>
<li>Since 32 + 27 = 59 (established arithmetic fact)</li>
<li>So S(32 + 27) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 32 + 28 = 60. ∎</strong></p>


<h3>525. 32 + 29 = 61</h3>

<ol>
<li>29 = S(28), so 32 + 29 = 32 + S(28)</li>
<li>By rule (b): 32 + S(28) = S(32 + 28)</li>
<li>Since 32 + 28 = 60 (established arithmetic fact)</li>
<li>So S(32 + 28) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 32 + 29 = 61. ∎</strong></p>


<h3>526. 32 + 30 = 62</h3>

<ol>
<li>30 = S(29), so 32 + 30 = 32 + S(29)</li>
<li>By rule (b): 32 + S(29) = S(32 + 29)</li>
<li>Since 32 + 29 = 61 (established arithmetic fact)</li>
<li>So S(32 + 29) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 32 + 30 = 62. ∎</strong></p>


<h3>527. 32 + 31 = 63</h3>

<ol>
<li>31 = S(30), so 32 + 31 = 32 + S(30)</li>
<li>By rule (b): 32 + S(30) = S(32 + 30)</li>
<li>Since 32 + 30 = 62 (established arithmetic fact)</li>
<li>So S(32 + 30) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 32 + 31 = 63. ∎</strong></p>


<h3>528. 32 + 32 = 64</h3>

<ol>
<li>32 = S(31), so 32 + 32 = 32 + S(31)</li>
<li>By rule (b): 32 + S(31) = S(32 + 31)</li>
<li>Since 32 + 31 = 63 (established arithmetic fact)</li>
<li>So S(32 + 31) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 32 + 32 = 64. ∎</strong></p>


<h3>529. 33 + 1 = 34</h3>

<ol>
<li>1 = S(0), so 33 + 1 = 33 + S(0)</li>
<li>By rule (b): 33 + S(0) = S(33 + 0)</li>
<li>Since 33 + 0 = 33 (established arithmetic fact)</li>
<li>So S(33 + 0) = S(33)</li>
<li>And S(33) = 34</li>
</ol>

<p><strong>Therefore: 33 + 1 = 34. ∎</strong></p>


<h3>530. 33 + 2 = 35</h3>

<ol>
<li>2 = S(1), so 33 + 2 = 33 + S(1)</li>
<li>By rule (b): 33 + S(1) = S(33 + 1)</li>
<li>Since 33 + 1 = 34 (established arithmetic fact)</li>
<li>So S(33 + 1) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 33 + 2 = 35. ∎</strong></p>


<h3>531. 33 + 3 = 36</h3>

<ol>
<li>3 = S(2), so 33 + 3 = 33 + S(2)</li>
<li>By rule (b): 33 + S(2) = S(33 + 2)</li>
<li>Since 33 + 2 = 35 (established arithmetic fact)</li>
<li>So S(33 + 2) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 33 + 3 = 36. ∎</strong></p>


<h3>532. 33 + 4 = 37</h3>

<ol>
<li>4 = S(3), so 33 + 4 = 33 + S(3)</li>
<li>By rule (b): 33 + S(3) = S(33 + 3)</li>
<li>Since 33 + 3 = 36 (established arithmetic fact)</li>
<li>So S(33 + 3) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 33 + 4 = 37. ∎</strong></p>


<h3>533. 33 + 5 = 38</h3>

<ol>
<li>5 = S(4), so 33 + 5 = 33 + S(4)</li>
<li>By rule (b): 33 + S(4) = S(33 + 4)</li>
<li>Since 33 + 4 = 37 (established arithmetic fact)</li>
<li>So S(33 + 4) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 33 + 5 = 38. ∎</strong></p>


<h3>534. 33 + 6 = 39</h3>

<ol>
<li>6 = S(5), so 33 + 6 = 33 + S(5)</li>
<li>By rule (b): 33 + S(5) = S(33 + 5)</li>
<li>Since 33 + 5 = 38 (established arithmetic fact)</li>
<li>So S(33 + 5) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 33 + 6 = 39. ∎</strong></p>


<h3>535. 33 + 7 = 40</h3>

<ol>
<li>7 = S(6), so 33 + 7 = 33 + S(6)</li>
<li>By rule (b): 33 + S(6) = S(33 + 6)</li>
<li>Since 33 + 6 = 39 (established arithmetic fact)</li>
<li>So S(33 + 6) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 33 + 7 = 40. ∎</strong></p>


<h3>536. 33 + 8 = 41</h3>

<ol>
<li>8 = S(7), so 33 + 8 = 33 + S(7)</li>
<li>By rule (b): 33 + S(7) = S(33 + 7)</li>
<li>Since 33 + 7 = 40 (established arithmetic fact)</li>
<li>So S(33 + 7) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 33 + 8 = 41. ∎</strong></p>


<h3>537. 33 + 9 = 42</h3>

<ol>
<li>9 = S(8), so 33 + 9 = 33 + S(8)</li>
<li>By rule (b): 33 + S(8) = S(33 + 8)</li>
<li>Since 33 + 8 = 41 (established arithmetic fact)</li>
<li>So S(33 + 8) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 33 + 9 = 42. ∎</strong></p>


<h3>538. 33 + 10 = 43</h3>

<ol>
<li>10 = S(9), so 33 + 10 = 33 + S(9)</li>
<li>By rule (b): 33 + S(9) = S(33 + 9)</li>
<li>Since 33 + 9 = 42 (established arithmetic fact)</li>
<li>So S(33 + 9) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 33 + 10 = 43. ∎</strong></p>


<h3>539. 33 + 11 = 44</h3>

<ol>
<li>11 = S(10), so 33 + 11 = 33 + S(10)</li>
<li>By rule (b): 33 + S(10) = S(33 + 10)</li>
<li>Since 33 + 10 = 43 (established arithmetic fact)</li>
<li>So S(33 + 10) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 33 + 11 = 44. ∎</strong></p>


<h3>540. 33 + 12 = 45</h3>

<ol>
<li>12 = S(11), so 33 + 12 = 33 + S(11)</li>
<li>By rule (b): 33 + S(11) = S(33 + 11)</li>
<li>Since 33 + 11 = 44 (established arithmetic fact)</li>
<li>So S(33 + 11) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 33 + 12 = 45. ∎</strong></p>


<h3>541. 33 + 13 = 46</h3>

<ol>
<li>13 = S(12), so 33 + 13 = 33 + S(12)</li>
<li>By rule (b): 33 + S(12) = S(33 + 12)</li>
<li>Since 33 + 12 = 45 (established arithmetic fact)</li>
<li>So S(33 + 12) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 33 + 13 = 46. ∎</strong></p>


<h3>542. 33 + 14 = 47</h3>

<ol>
<li>14 = S(13), so 33 + 14 = 33 + S(13)</li>
<li>By rule (b): 33 + S(13) = S(33 + 13)</li>
<li>Since 33 + 13 = 46 (established arithmetic fact)</li>
<li>So S(33 + 13) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 33 + 14 = 47. ∎</strong></p>


<h3>543. 33 + 15 = 48</h3>

<ol>
<li>15 = S(14), so 33 + 15 = 33 + S(14)</li>
<li>By rule (b): 33 + S(14) = S(33 + 14)</li>
<li>Since 33 + 14 = 47 (established arithmetic fact)</li>
<li>So S(33 + 14) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 33 + 15 = 48. ∎</strong></p>


<h3>544. 33 + 16 = 49</h3>

<ol>
<li>16 = S(15), so 33 + 16 = 33 + S(15)</li>
<li>By rule (b): 33 + S(15) = S(33 + 15)</li>
<li>Since 33 + 15 = 48 (established arithmetic fact)</li>
<li>So S(33 + 15) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 33 + 16 = 49. ∎</strong></p>


<h3>545. 33 + 17 = 50</h3>

<ol>
<li>17 = S(16), so 33 + 17 = 33 + S(16)</li>
<li>By rule (b): 33 + S(16) = S(33 + 16)</li>
<li>Since 33 + 16 = 49 (established arithmetic fact)</li>
<li>So S(33 + 16) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 33 + 17 = 50. ∎</strong></p>


<h3>546. 33 + 18 = 51</h3>

<ol>
<li>18 = S(17), so 33 + 18 = 33 + S(17)</li>
<li>By rule (b): 33 + S(17) = S(33 + 17)</li>
<li>Since 33 + 17 = 50 (established arithmetic fact)</li>
<li>So S(33 + 17) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 33 + 18 = 51. ∎</strong></p>


<h3>547. 33 + 19 = 52</h3>

<ol>
<li>19 = S(18), so 33 + 19 = 33 + S(18)</li>
<li>By rule (b): 33 + S(18) = S(33 + 18)</li>
<li>Since 33 + 18 = 51 (established arithmetic fact)</li>
<li>So S(33 + 18) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 33 + 19 = 52. ∎</strong></p>


<h3>548. 33 + 20 = 53</h3>

<ol>
<li>20 = S(19), so 33 + 20 = 33 + S(19)</li>
<li>By rule (b): 33 + S(19) = S(33 + 19)</li>
<li>Since 33 + 19 = 52 (established arithmetic fact)</li>
<li>So S(33 + 19) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 33 + 20 = 53. ∎</strong></p>


<h3>549. 33 + 21 = 54</h3>

<ol>
<li>21 = S(20), so 33 + 21 = 33 + S(20)</li>
<li>By rule (b): 33 + S(20) = S(33 + 20)</li>
<li>Since 33 + 20 = 53 (established arithmetic fact)</li>
<li>So S(33 + 20) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 33 + 21 = 54. ∎</strong></p>


<h3>550. 33 + 22 = 55</h3>

<ol>
<li>22 = S(21), so 33 + 22 = 33 + S(21)</li>
<li>By rule (b): 33 + S(21) = S(33 + 21)</li>
<li>Since 33 + 21 = 54 (established arithmetic fact)</li>
<li>So S(33 + 21) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 33 + 22 = 55. ∎</strong></p>


<h3>551. 33 + 23 = 56</h3>

<ol>
<li>23 = S(22), so 33 + 23 = 33 + S(22)</li>
<li>By rule (b): 33 + S(22) = S(33 + 22)</li>
<li>Since 33 + 22 = 55 (established arithmetic fact)</li>
<li>So S(33 + 22) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 33 + 23 = 56. ∎</strong></p>


<h3>552. 33 + 24 = 57</h3>

<ol>
<li>24 = S(23), so 33 + 24 = 33 + S(23)</li>
<li>By rule (b): 33 + S(23) = S(33 + 23)</li>
<li>Since 33 + 23 = 56 (established arithmetic fact)</li>
<li>So S(33 + 23) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 33 + 24 = 57. ∎</strong></p>


<h3>553. 33 + 25 = 58</h3>

<ol>
<li>25 = S(24), so 33 + 25 = 33 + S(24)</li>
<li>By rule (b): 33 + S(24) = S(33 + 24)</li>
<li>Since 33 + 24 = 57 (established arithmetic fact)</li>
<li>So S(33 + 24) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 33 + 25 = 58. ∎</strong></p>


<h3>554. 33 + 26 = 59</h3>

<ol>
<li>26 = S(25), so 33 + 26 = 33 + S(25)</li>
<li>By rule (b): 33 + S(25) = S(33 + 25)</li>
<li>Since 33 + 25 = 58 (established arithmetic fact)</li>
<li>So S(33 + 25) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 33 + 26 = 59. ∎</strong></p>


<h3>555. 33 + 27 = 60</h3>

<ol>
<li>27 = S(26), so 33 + 27 = 33 + S(26)</li>
<li>By rule (b): 33 + S(26) = S(33 + 26)</li>
<li>Since 33 + 26 = 59 (established arithmetic fact)</li>
<li>So S(33 + 26) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 33 + 27 = 60. ∎</strong></p>


<h3>556. 33 + 28 = 61</h3>

<ol>
<li>28 = S(27), so 33 + 28 = 33 + S(27)</li>
<li>By rule (b): 33 + S(27) = S(33 + 27)</li>
<li>Since 33 + 27 = 60 (established arithmetic fact)</li>
<li>So S(33 + 27) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 33 + 28 = 61. ∎</strong></p>


<h3>557. 33 + 29 = 62</h3>

<ol>
<li>29 = S(28), so 33 + 29 = 33 + S(28)</li>
<li>By rule (b): 33 + S(28) = S(33 + 28)</li>
<li>Since 33 + 28 = 61 (established arithmetic fact)</li>
<li>So S(33 + 28) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 33 + 29 = 62. ∎</strong></p>


<h3>558. 33 + 30 = 63</h3>

<ol>
<li>30 = S(29), so 33 + 30 = 33 + S(29)</li>
<li>By rule (b): 33 + S(29) = S(33 + 29)</li>
<li>Since 33 + 29 = 62 (established arithmetic fact)</li>
<li>So S(33 + 29) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 33 + 30 = 63. ∎</strong></p>


<h3>559. 33 + 31 = 64</h3>

<ol>
<li>31 = S(30), so 33 + 31 = 33 + S(30)</li>
<li>By rule (b): 33 + S(30) = S(33 + 30)</li>
<li>Since 33 + 30 = 63 (established arithmetic fact)</li>
<li>So S(33 + 30) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 33 + 31 = 64. ∎</strong></p>


<h3>560. 33 + 32 = 65</h3>

<ol>
<li>32 = S(31), so 33 + 32 = 33 + S(31)</li>
<li>By rule (b): 33 + S(31) = S(33 + 31)</li>
<li>Since 33 + 31 = 64 (established arithmetic fact)</li>
<li>So S(33 + 31) = S(64)</li>
<li>And S(64) = 65</li>
</ol>

<p><strong>Therefore: 33 + 32 = 65. ∎</strong></p>


<h3>561. 33 + 33 = 66</h3>

<ol>
<li>33 = S(32), so 33 + 33 = 33 + S(32)</li>
<li>By rule (b): 33 + S(32) = S(33 + 32)</li>
<li>Since 33 + 32 = 65 (established arithmetic fact)</li>
<li>So S(33 + 32) = S(65)</li>
<li>And S(65) = 66</li>
</ol>

<p><strong>Therefore: 33 + 33 = 66. ∎</strong></p>


<h3>562. 34 + 1 = 35</h3>

<ol>
<li>1 = S(0), so 34 + 1 = 34 + S(0)</li>
<li>By rule (b): 34 + S(0) = S(34 + 0)</li>
<li>Since 34 + 0 = 34 (established arithmetic fact)</li>
<li>So S(34 + 0) = S(34)</li>
<li>And S(34) = 35</li>
</ol>

<p><strong>Therefore: 34 + 1 = 35. ∎</strong></p>


<h3>563. 34 + 2 = 36</h3>

<ol>
<li>2 = S(1), so 34 + 2 = 34 + S(1)</li>
<li>By rule (b): 34 + S(1) = S(34 + 1)</li>
<li>Since 34 + 1 = 35 (established arithmetic fact)</li>
<li>So S(34 + 1) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 34 + 2 = 36. ∎</strong></p>


<h3>564. 34 + 3 = 37</h3>

<ol>
<li>3 = S(2), so 34 + 3 = 34 + S(2)</li>
<li>By rule (b): 34 + S(2) = S(34 + 2)</li>
<li>Since 34 + 2 = 36 (established arithmetic fact)</li>
<li>So S(34 + 2) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 34 + 3 = 37. ∎</strong></p>


<h3>565. 34 + 4 = 38</h3>

<ol>
<li>4 = S(3), so 34 + 4 = 34 + S(3)</li>
<li>By rule (b): 34 + S(3) = S(34 + 3)</li>
<li>Since 34 + 3 = 37 (established arithmetic fact)</li>
<li>So S(34 + 3) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 34 + 4 = 38. ∎</strong></p>


<h3>566. 34 + 5 = 39</h3>

<ol>
<li>5 = S(4), so 34 + 5 = 34 + S(4)</li>
<li>By rule (b): 34 + S(4) = S(34 + 4)</li>
<li>Since 34 + 4 = 38 (established arithmetic fact)</li>
<li>So S(34 + 4) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 34 + 5 = 39. ∎</strong></p>


<h3>567. 34 + 6 = 40</h3>

<ol>
<li>6 = S(5), so 34 + 6 = 34 + S(5)</li>
<li>By rule (b): 34 + S(5) = S(34 + 5)</li>
<li>Since 34 + 5 = 39 (established arithmetic fact)</li>
<li>So S(34 + 5) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 34 + 6 = 40. ∎</strong></p>


<h3>568. 34 + 7 = 41</h3>

<ol>
<li>7 = S(6), so 34 + 7 = 34 + S(6)</li>
<li>By rule (b): 34 + S(6) = S(34 + 6)</li>
<li>Since 34 + 6 = 40 (established arithmetic fact)</li>
<li>So S(34 + 6) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 34 + 7 = 41. ∎</strong></p>


<h3>569. 34 + 8 = 42</h3>

<ol>
<li>8 = S(7), so 34 + 8 = 34 + S(7)</li>
<li>By rule (b): 34 + S(7) = S(34 + 7)</li>
<li>Since 34 + 7 = 41 (established arithmetic fact)</li>
<li>So S(34 + 7) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 34 + 8 = 42. ∎</strong></p>


<h3>570. 34 + 9 = 43</h3>

<ol>
<li>9 = S(8), so 34 + 9 = 34 + S(8)</li>
<li>By rule (b): 34 + S(8) = S(34 + 8)</li>
<li>Since 34 + 8 = 42 (established arithmetic fact)</li>
<li>So S(34 + 8) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 34 + 9 = 43. ∎</strong></p>


<h3>571. 34 + 10 = 44</h3>

<ol>
<li>10 = S(9), so 34 + 10 = 34 + S(9)</li>
<li>By rule (b): 34 + S(9) = S(34 + 9)</li>
<li>Since 34 + 9 = 43 (established arithmetic fact)</li>
<li>So S(34 + 9) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 34 + 10 = 44. ∎</strong></p>


<h3>572. 34 + 11 = 45</h3>

<ol>
<li>11 = S(10), so 34 + 11 = 34 + S(10)</li>
<li>By rule (b): 34 + S(10) = S(34 + 10)</li>
<li>Since 34 + 10 = 44 (established arithmetic fact)</li>
<li>So S(34 + 10) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 34 + 11 = 45. ∎</strong></p>


<h3>573. 34 + 12 = 46</h3>

<ol>
<li>12 = S(11), so 34 + 12 = 34 + S(11)</li>
<li>By rule (b): 34 + S(11) = S(34 + 11)</li>
<li>Since 34 + 11 = 45 (established arithmetic fact)</li>
<li>So S(34 + 11) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 34 + 12 = 46. ∎</strong></p>


<h3>574. 34 + 13 = 47</h3>

<ol>
<li>13 = S(12), so 34 + 13 = 34 + S(12)</li>
<li>By rule (b): 34 + S(12) = S(34 + 12)</li>
<li>Since 34 + 12 = 46 (established arithmetic fact)</li>
<li>So S(34 + 12) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 34 + 13 = 47. ∎</strong></p>


<h3>575. 34 + 14 = 48</h3>

<ol>
<li>14 = S(13), so 34 + 14 = 34 + S(13)</li>
<li>By rule (b): 34 + S(13) = S(34 + 13)</li>
<li>Since 34 + 13 = 47 (established arithmetic fact)</li>
<li>So S(34 + 13) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 34 + 14 = 48. ∎</strong></p>


<h3>576. 34 + 15 = 49</h3>

<ol>
<li>15 = S(14), so 34 + 15 = 34 + S(14)</li>
<li>By rule (b): 34 + S(14) = S(34 + 14)</li>
<li>Since 34 + 14 = 48 (established arithmetic fact)</li>
<li>So S(34 + 14) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 34 + 15 = 49. ∎</strong></p>


<h3>577. 34 + 16 = 50</h3>

<ol>
<li>16 = S(15), so 34 + 16 = 34 + S(15)</li>
<li>By rule (b): 34 + S(15) = S(34 + 15)</li>
<li>Since 34 + 15 = 49 (established arithmetic fact)</li>
<li>So S(34 + 15) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 34 + 16 = 50. ∎</strong></p>


<h3>578. 34 + 17 = 51</h3>

<ol>
<li>17 = S(16), so 34 + 17 = 34 + S(16)</li>
<li>By rule (b): 34 + S(16) = S(34 + 16)</li>
<li>Since 34 + 16 = 50 (established arithmetic fact)</li>
<li>So S(34 + 16) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 34 + 17 = 51. ∎</strong></p>


<h3>579. 34 + 18 = 52</h3>

<ol>
<li>18 = S(17), so 34 + 18 = 34 + S(17)</li>
<li>By rule (b): 34 + S(17) = S(34 + 17)</li>
<li>Since 34 + 17 = 51 (established arithmetic fact)</li>
<li>So S(34 + 17) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 34 + 18 = 52. ∎</strong></p>


<h3>580. 34 + 19 = 53</h3>

<ol>
<li>19 = S(18), so 34 + 19 = 34 + S(18)</li>
<li>By rule (b): 34 + S(18) = S(34 + 18)</li>
<li>Since 34 + 18 = 52 (established arithmetic fact)</li>
<li>So S(34 + 18) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 34 + 19 = 53. ∎</strong></p>


<h3>581. 34 + 20 = 54</h3>

<ol>
<li>20 = S(19), so 34 + 20 = 34 + S(19)</li>
<li>By rule (b): 34 + S(19) = S(34 + 19)</li>
<li>Since 34 + 19 = 53 (established arithmetic fact)</li>
<li>So S(34 + 19) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 34 + 20 = 54. ∎</strong></p>


<h3>582. 34 + 21 = 55</h3>

<ol>
<li>21 = S(20), so 34 + 21 = 34 + S(20)</li>
<li>By rule (b): 34 + S(20) = S(34 + 20)</li>
<li>Since 34 + 20 = 54 (established arithmetic fact)</li>
<li>So S(34 + 20) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 34 + 21 = 55. ∎</strong></p>


<h3>583. 34 + 22 = 56</h3>

<ol>
<li>22 = S(21), so 34 + 22 = 34 + S(21)</li>
<li>By rule (b): 34 + S(21) = S(34 + 21)</li>
<li>Since 34 + 21 = 55 (established arithmetic fact)</li>
<li>So S(34 + 21) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 34 + 22 = 56. ∎</strong></p>


<h3>584. 34 + 23 = 57</h3>

<ol>
<li>23 = S(22), so 34 + 23 = 34 + S(22)</li>
<li>By rule (b): 34 + S(22) = S(34 + 22)</li>
<li>Since 34 + 22 = 56 (established arithmetic fact)</li>
<li>So S(34 + 22) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 34 + 23 = 57. ∎</strong></p>


<h3>585. 34 + 24 = 58</h3>

<ol>
<li>24 = S(23), so 34 + 24 = 34 + S(23)</li>
<li>By rule (b): 34 + S(23) = S(34 + 23)</li>
<li>Since 34 + 23 = 57 (established arithmetic fact)</li>
<li>So S(34 + 23) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 34 + 24 = 58. ∎</strong></p>


<h3>586. 34 + 25 = 59</h3>

<ol>
<li>25 = S(24), so 34 + 25 = 34 + S(24)</li>
<li>By rule (b): 34 + S(24) = S(34 + 24)</li>
<li>Since 34 + 24 = 58 (established arithmetic fact)</li>
<li>So S(34 + 24) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 34 + 25 = 59. ∎</strong></p>


<h3>587. 34 + 26 = 60</h3>

<ol>
<li>26 = S(25), so 34 + 26 = 34 + S(25)</li>
<li>By rule (b): 34 + S(25) = S(34 + 25)</li>
<li>Since 34 + 25 = 59 (established arithmetic fact)</li>
<li>So S(34 + 25) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 34 + 26 = 60. ∎</strong></p>


<h3>588. 34 + 27 = 61</h3>

<ol>
<li>27 = S(26), so 34 + 27 = 34 + S(26)</li>
<li>By rule (b): 34 + S(26) = S(34 + 26)</li>
<li>Since 34 + 26 = 60 (established arithmetic fact)</li>
<li>So S(34 + 26) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 34 + 27 = 61. ∎</strong></p>


<h3>589. 34 + 28 = 62</h3>

<ol>
<li>28 = S(27), so 34 + 28 = 34 + S(27)</li>
<li>By rule (b): 34 + S(27) = S(34 + 27)</li>
<li>Since 34 + 27 = 61 (established arithmetic fact)</li>
<li>So S(34 + 27) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 34 + 28 = 62. ∎</strong></p>


<h3>590. 34 + 29 = 63</h3>

<ol>
<li>29 = S(28), so 34 + 29 = 34 + S(28)</li>
<li>By rule (b): 34 + S(28) = S(34 + 28)</li>
<li>Since 34 + 28 = 62 (established arithmetic fact)</li>
<li>So S(34 + 28) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 34 + 29 = 63. ∎</strong></p>


<h3>591. 34 + 30 = 64</h3>

<ol>
<li>30 = S(29), so 34 + 30 = 34 + S(29)</li>
<li>By rule (b): 34 + S(29) = S(34 + 29)</li>
<li>Since 34 + 29 = 63 (established arithmetic fact)</li>
<li>So S(34 + 29) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 34 + 30 = 64. ∎</strong></p>


<h3>592. 34 + 31 = 65</h3>

<ol>
<li>31 = S(30), so 34 + 31 = 34 + S(30)</li>
<li>By rule (b): 34 + S(30) = S(34 + 30)</li>
<li>Since 34 + 30 = 64 (established arithmetic fact)</li>
<li>So S(34 + 30) = S(64)</li>
<li>And S(64) = 65</li>
</ol>

<p><strong>Therefore: 34 + 31 = 65. ∎</strong></p>


<h3>593. 34 + 32 = 66</h3>

<ol>
<li>32 = S(31), so 34 + 32 = 34 + S(31)</li>
<li>By rule (b): 34 + S(31) = S(34 + 31)</li>
<li>Since 34 + 31 = 65 (established arithmetic fact)</li>
<li>So S(34 + 31) = S(65)</li>
<li>And S(65) = 66</li>
</ol>

<p><strong>Therefore: 34 + 32 = 66. ∎</strong></p>


<h3>594. 34 + 33 = 67</h3>

<ol>
<li>33 = S(32), so 34 + 33 = 34 + S(32)</li>
<li>By rule (b): 34 + S(32) = S(34 + 32)</li>
<li>Since 34 + 32 = 66 (established arithmetic fact)</li>
<li>So S(34 + 32) = S(66)</li>
<li>And S(66) = 67</li>
</ol>

<p><strong>Therefore: 34 + 33 = 67. ∎</strong></p>


<h3>595. 34 + 34 = 68</h3>

<ol>
<li>34 = S(33), so 34 + 34 = 34 + S(33)</li>
<li>By rule (b): 34 + S(33) = S(34 + 33)</li>
<li>Since 34 + 33 = 67 (established arithmetic fact)</li>
<li>So S(34 + 33) = S(67)</li>
<li>And S(67) = 68</li>
</ol>

<p><strong>Therefore: 34 + 34 = 68. ∎</strong></p>


<h3>596. 35 + 1 = 36</h3>

<ol>
<li>1 = S(0), so 35 + 1 = 35 + S(0)</li>
<li>By rule (b): 35 + S(0) = S(35 + 0)</li>
<li>Since 35 + 0 = 35 (established arithmetic fact)</li>
<li>So S(35 + 0) = S(35)</li>
<li>And S(35) = 36</li>
</ol>

<p><strong>Therefore: 35 + 1 = 36. ∎</strong></p>


<h3>597. 35 + 2 = 37</h3>

<ol>
<li>2 = S(1), so 35 + 2 = 35 + S(1)</li>
<li>By rule (b): 35 + S(1) = S(35 + 1)</li>
<li>Since 35 + 1 = 36 (established arithmetic fact)</li>
<li>So S(35 + 1) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 35 + 2 = 37. ∎</strong></p>


<h3>598. 35 + 3 = 38</h3>

<ol>
<li>3 = S(2), so 35 + 3 = 35 + S(2)</li>
<li>By rule (b): 35 + S(2) = S(35 + 2)</li>
<li>Since 35 + 2 = 37 (established arithmetic fact)</li>
<li>So S(35 + 2) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 35 + 3 = 38. ∎</strong></p>


<h3>599. 35 + 4 = 39</h3>

<ol>
<li>4 = S(3), so 35 + 4 = 35 + S(3)</li>
<li>By rule (b): 35 + S(3) = S(35 + 3)</li>
<li>Since 35 + 3 = 38 (established arithmetic fact)</li>
<li>So S(35 + 3) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 35 + 4 = 39. ∎</strong></p>


<h3>600. 35 + 5 = 40</h3>

<ol>
<li>5 = S(4), so 35 + 5 = 35 + S(4)</li>
<li>By rule (b): 35 + S(4) = S(35 + 4)</li>
<li>Since 35 + 4 = 39 (established arithmetic fact)</li>
<li>So S(35 + 4) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 35 + 5 = 40. ∎</strong></p>


<h3>601. 35 + 6 = 41</h3>

<ol>
<li>6 = S(5), so 35 + 6 = 35 + S(5)</li>
<li>By rule (b): 35 + S(5) = S(35 + 5)</li>
<li>Since 35 + 5 = 40 (established arithmetic fact)</li>
<li>So S(35 + 5) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 35 + 6 = 41. ∎</strong></p>


<h3>602. 35 + 7 = 42</h3>

<ol>
<li>7 = S(6), so 35 + 7 = 35 + S(6)</li>
<li>By rule (b): 35 + S(6) = S(35 + 6)</li>
<li>Since 35 + 6 = 41 (established arithmetic fact)</li>
<li>So S(35 + 6) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 35 + 7 = 42. ∎</strong></p>


<h3>603. 35 + 8 = 43</h3>

<ol>
<li>8 = S(7), so 35 + 8 = 35 + S(7)</li>
<li>By rule (b): 35 + S(7) = S(35 + 7)</li>
<li>Since 35 + 7 = 42 (established arithmetic fact)</li>
<li>So S(35 + 7) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 35 + 8 = 43. ∎</strong></p>


<h3>604. 35 + 9 = 44</h3>

<ol>
<li>9 = S(8), so 35 + 9 = 35 + S(8)</li>
<li>By rule (b): 35 + S(8) = S(35 + 8)</li>
<li>Since 35 + 8 = 43 (established arithmetic fact)</li>
<li>So S(35 + 8) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 35 + 9 = 44. ∎</strong></p>


<h3>605. 35 + 10 = 45</h3>

<ol>
<li>10 = S(9), so 35 + 10 = 35 + S(9)</li>
<li>By rule (b): 35 + S(9) = S(35 + 9)</li>
<li>Since 35 + 9 = 44 (established arithmetic fact)</li>
<li>So S(35 + 9) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 35 + 10 = 45. ∎</strong></p>


<h3>606. 35 + 11 = 46</h3>

<ol>
<li>11 = S(10), so 35 + 11 = 35 + S(10)</li>
<li>By rule (b): 35 + S(10) = S(35 + 10)</li>
<li>Since 35 + 10 = 45 (established arithmetic fact)</li>
<li>So S(35 + 10) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 35 + 11 = 46. ∎</strong></p>


<h3>607. 35 + 12 = 47</h3>

<ol>
<li>12 = S(11), so 35 + 12 = 35 + S(11)</li>
<li>By rule (b): 35 + S(11) = S(35 + 11)</li>
<li>Since 35 + 11 = 46 (established arithmetic fact)</li>
<li>So S(35 + 11) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 35 + 12 = 47. ∎</strong></p>


<h3>608. 35 + 13 = 48</h3>

<ol>
<li>13 = S(12), so 35 + 13 = 35 + S(12)</li>
<li>By rule (b): 35 + S(12) = S(35 + 12)</li>
<li>Since 35 + 12 = 47 (established arithmetic fact)</li>
<li>So S(35 + 12) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 35 + 13 = 48. ∎</strong></p>


<h3>609. 35 + 14 = 49</h3>

<ol>
<li>14 = S(13), so 35 + 14 = 35 + S(13)</li>
<li>By rule (b): 35 + S(13) = S(35 + 13)</li>
<li>Since 35 + 13 = 48 (established arithmetic fact)</li>
<li>So S(35 + 13) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 35 + 14 = 49. ∎</strong></p>


<h3>610. 35 + 15 = 50</h3>

<ol>
<li>15 = S(14), so 35 + 15 = 35 + S(14)</li>
<li>By rule (b): 35 + S(14) = S(35 + 14)</li>
<li>Since 35 + 14 = 49 (established arithmetic fact)</li>
<li>So S(35 + 14) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 35 + 15 = 50. ∎</strong></p>


<h3>611. 35 + 16 = 51</h3>

<ol>
<li>16 = S(15), so 35 + 16 = 35 + S(15)</li>
<li>By rule (b): 35 + S(15) = S(35 + 15)</li>
<li>Since 35 + 15 = 50 (established arithmetic fact)</li>
<li>So S(35 + 15) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 35 + 16 = 51. ∎</strong></p>


<h3>612. 35 + 17 = 52</h3>

<ol>
<li>17 = S(16), so 35 + 17 = 35 + S(16)</li>
<li>By rule (b): 35 + S(16) = S(35 + 16)</li>
<li>Since 35 + 16 = 51 (established arithmetic fact)</li>
<li>So S(35 + 16) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 35 + 17 = 52. ∎</strong></p>


<h3>613. 35 + 18 = 53</h3>

<ol>
<li>18 = S(17), so 35 + 18 = 35 + S(17)</li>
<li>By rule (b): 35 + S(17) = S(35 + 17)</li>
<li>Since 35 + 17 = 52 (established arithmetic fact)</li>
<li>So S(35 + 17) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 35 + 18 = 53. ∎</strong></p>


<h3>614. 35 + 19 = 54</h3>

<ol>
<li>19 = S(18), so 35 + 19 = 35 + S(18)</li>
<li>By rule (b): 35 + S(18) = S(35 + 18)</li>
<li>Since 35 + 18 = 53 (established arithmetic fact)</li>
<li>So S(35 + 18) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 35 + 19 = 54. ∎</strong></p>


<h3>615. 35 + 20 = 55</h3>

<ol>
<li>20 = S(19), so 35 + 20 = 35 + S(19)</li>
<li>By rule (b): 35 + S(19) = S(35 + 19)</li>
<li>Since 35 + 19 = 54 (established arithmetic fact)</li>
<li>So S(35 + 19) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 35 + 20 = 55. ∎</strong></p>


<h3>616. 35 + 21 = 56</h3>

<ol>
<li>21 = S(20), so 35 + 21 = 35 + S(20)</li>
<li>By rule (b): 35 + S(20) = S(35 + 20)</li>
<li>Since 35 + 20 = 55 (established arithmetic fact)</li>
<li>So S(35 + 20) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 35 + 21 = 56. ∎</strong></p>


<h3>617. 35 + 22 = 57</h3>

<ol>
<li>22 = S(21), so 35 + 22 = 35 + S(21)</li>
<li>By rule (b): 35 + S(21) = S(35 + 21)</li>
<li>Since 35 + 21 = 56 (established arithmetic fact)</li>
<li>So S(35 + 21) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 35 + 22 = 57. ∎</strong></p>


<h3>618. 35 + 23 = 58</h3>

<ol>
<li>23 = S(22), so 35 + 23 = 35 + S(22)</li>
<li>By rule (b): 35 + S(22) = S(35 + 22)</li>
<li>Since 35 + 22 = 57 (established arithmetic fact)</li>
<li>So S(35 + 22) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 35 + 23 = 58. ∎</strong></p>


<h3>619. 35 + 24 = 59</h3>

<ol>
<li>24 = S(23), so 35 + 24 = 35 + S(23)</li>
<li>By rule (b): 35 + S(23) = S(35 + 23)</li>
<li>Since 35 + 23 = 58 (established arithmetic fact)</li>
<li>So S(35 + 23) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 35 + 24 = 59. ∎</strong></p>


<h3>620. 35 + 25 = 60</h3>

<ol>
<li>25 = S(24), so 35 + 25 = 35 + S(24)</li>
<li>By rule (b): 35 + S(24) = S(35 + 24)</li>
<li>Since 35 + 24 = 59 (established arithmetic fact)</li>
<li>So S(35 + 24) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 35 + 25 = 60. ∎</strong></p>


<h3>621. 35 + 26 = 61</h3>

<ol>
<li>26 = S(25), so 35 + 26 = 35 + S(25)</li>
<li>By rule (b): 35 + S(25) = S(35 + 25)</li>
<li>Since 35 + 25 = 60 (established arithmetic fact)</li>
<li>So S(35 + 25) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 35 + 26 = 61. ∎</strong></p>


<h3>622. 35 + 27 = 62</h3>

<ol>
<li>27 = S(26), so 35 + 27 = 35 + S(26)</li>
<li>By rule (b): 35 + S(26) = S(35 + 26)</li>
<li>Since 35 + 26 = 61 (established arithmetic fact)</li>
<li>So S(35 + 26) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 35 + 27 = 62. ∎</strong></p>


<h3>623. 35 + 28 = 63</h3>

<ol>
<li>28 = S(27), so 35 + 28 = 35 + S(27)</li>
<li>By rule (b): 35 + S(27) = S(35 + 27)</li>
<li>Since 35 + 27 = 62 (established arithmetic fact)</li>
<li>So S(35 + 27) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 35 + 28 = 63. ∎</strong></p>


<h3>624. 35 + 29 = 64</h3>

<ol>
<li>29 = S(28), so 35 + 29 = 35 + S(28)</li>
<li>By rule (b): 35 + S(28) = S(35 + 28)</li>
<li>Since 35 + 28 = 63 (established arithmetic fact)</li>
<li>So S(35 + 28) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 35 + 29 = 64. ∎</strong></p>


<h3>625. 35 + 30 = 65</h3>

<ol>
<li>30 = S(29), so 35 + 30 = 35 + S(29)</li>
<li>By rule (b): 35 + S(29) = S(35 + 29)</li>
<li>Since 35 + 29 = 64 (established arithmetic fact)</li>
<li>So S(35 + 29) = S(64)</li>
<li>And S(64) = 65</li>
</ol>

<p><strong>Therefore: 35 + 30 = 65. ∎</strong></p>


<h3>626. 35 + 31 = 66</h3>

<ol>
<li>31 = S(30), so 35 + 31 = 35 + S(30)</li>
<li>By rule (b): 35 + S(30) = S(35 + 30)</li>
<li>Since 35 + 30 = 65 (established arithmetic fact)</li>
<li>So S(35 + 30) = S(65)</li>
<li>And S(65) = 66</li>
</ol>

<p><strong>Therefore: 35 + 31 = 66. ∎</strong></p>


<h3>627. 35 + 32 = 67</h3>

<ol>
<li>32 = S(31), so 35 + 32 = 35 + S(31)</li>
<li>By rule (b): 35 + S(31) = S(35 + 31)</li>
<li>Since 35 + 31 = 66 (established arithmetic fact)</li>
<li>So S(35 + 31) = S(66)</li>
<li>And S(66) = 67</li>
</ol>

<p><strong>Therefore: 35 + 32 = 67. ∎</strong></p>


<h3>628. 35 + 33 = 68</h3>

<ol>
<li>33 = S(32), so 35 + 33 = 35 + S(32)</li>
<li>By rule (b): 35 + S(32) = S(35 + 32)</li>
<li>Since 35 + 32 = 67 (established arithmetic fact)</li>
<li>So S(35 + 32) = S(67)</li>
<li>And S(67) = 68</li>
</ol>

<p><strong>Therefore: 35 + 33 = 68. ∎</strong></p>


<h3>629. 35 + 34 = 69</h3>

<ol>
<li>34 = S(33), so 35 + 34 = 35 + S(33)</li>
<li>By rule (b): 35 + S(33) = S(35 + 33)</li>
<li>Since 35 + 33 = 68 (established arithmetic fact)</li>
<li>So S(35 + 33) = S(68)</li>
<li>And S(68) = 69</li>
</ol>

<p><strong>Therefore: 35 + 34 = 69. ∎</strong></p>


<h3>630. 35 + 35 = 70</h3>

<ol>
<li>35 = S(34), so 35 + 35 = 35 + S(34)</li>
<li>By rule (b): 35 + S(34) = S(35 + 34)</li>
<li>Since 35 + 34 = 69 (established arithmetic fact)</li>
<li>So S(35 + 34) = S(69)</li>
<li>And S(69) = 70</li>
</ol>

<p><strong>Therefore: 35 + 35 = 70. ∎</strong></p>


<h3>631. 36 + 1 = 37</h3>

<ol>
<li>1 = S(0), so 36 + 1 = 36 + S(0)</li>
<li>By rule (b): 36 + S(0) = S(36 + 0)</li>
<li>Since 36 + 0 = 36 (established arithmetic fact)</li>
<li>So S(36 + 0) = S(36)</li>
<li>And S(36) = 37</li>
</ol>

<p><strong>Therefore: 36 + 1 = 37. ∎</strong></p>


<h3>632. 36 + 2 = 38</h3>

<ol>
<li>2 = S(1), so 36 + 2 = 36 + S(1)</li>
<li>By rule (b): 36 + S(1) = S(36 + 1)</li>
<li>Since 36 + 1 = 37 (established arithmetic fact)</li>
<li>So S(36 + 1) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 36 + 2 = 38. ∎</strong></p>


<h3>633. 36 + 3 = 39</h3>

<ol>
<li>3 = S(2), so 36 + 3 = 36 + S(2)</li>
<li>By rule (b): 36 + S(2) = S(36 + 2)</li>
<li>Since 36 + 2 = 38 (established arithmetic fact)</li>
<li>So S(36 + 2) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 36 + 3 = 39. ∎</strong></p>


<h3>634. 36 + 4 = 40</h3>

<ol>
<li>4 = S(3), so 36 + 4 = 36 + S(3)</li>
<li>By rule (b): 36 + S(3) = S(36 + 3)</li>
<li>Since 36 + 3 = 39 (established arithmetic fact)</li>
<li>So S(36 + 3) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 36 + 4 = 40. ∎</strong></p>


<h3>635. 36 + 5 = 41</h3>

<ol>
<li>5 = S(4), so 36 + 5 = 36 + S(4)</li>
<li>By rule (b): 36 + S(4) = S(36 + 4)</li>
<li>Since 36 + 4 = 40 (established arithmetic fact)</li>
<li>So S(36 + 4) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 36 + 5 = 41. ∎</strong></p>


<h3>636. 36 + 6 = 42</h3>

<ol>
<li>6 = S(5), so 36 + 6 = 36 + S(5)</li>
<li>By rule (b): 36 + S(5) = S(36 + 5)</li>
<li>Since 36 + 5 = 41 (established arithmetic fact)</li>
<li>So S(36 + 5) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 36 + 6 = 42. ∎</strong></p>


<h3>637. 36 + 7 = 43</h3>

<ol>
<li>7 = S(6), so 36 + 7 = 36 + S(6)</li>
<li>By rule (b): 36 + S(6) = S(36 + 6)</li>
<li>Since 36 + 6 = 42 (established arithmetic fact)</li>
<li>So S(36 + 6) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 36 + 7 = 43. ∎</strong></p>


<h3>638. 36 + 8 = 44</h3>

<ol>
<li>8 = S(7), so 36 + 8 = 36 + S(7)</li>
<li>By rule (b): 36 + S(7) = S(36 + 7)</li>
<li>Since 36 + 7 = 43 (established arithmetic fact)</li>
<li>So S(36 + 7) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 36 + 8 = 44. ∎</strong></p>


<h3>639. 36 + 9 = 45</h3>

<ol>
<li>9 = S(8), so 36 + 9 = 36 + S(8)</li>
<li>By rule (b): 36 + S(8) = S(36 + 8)</li>
<li>Since 36 + 8 = 44 (established arithmetic fact)</li>
<li>So S(36 + 8) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 36 + 9 = 45. ∎</strong></p>


<h3>640. 36 + 10 = 46</h3>

<ol>
<li>10 = S(9), so 36 + 10 = 36 + S(9)</li>
<li>By rule (b): 36 + S(9) = S(36 + 9)</li>
<li>Since 36 + 9 = 45 (established arithmetic fact)</li>
<li>So S(36 + 9) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 36 + 10 = 46. ∎</strong></p>


<h3>641. 36 + 11 = 47</h3>

<ol>
<li>11 = S(10), so 36 + 11 = 36 + S(10)</li>
<li>By rule (b): 36 + S(10) = S(36 + 10)</li>
<li>Since 36 + 10 = 46 (established arithmetic fact)</li>
<li>So S(36 + 10) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 36 + 11 = 47. ∎</strong></p>


<h3>642. 36 + 12 = 48</h3>

<ol>
<li>12 = S(11), so 36 + 12 = 36 + S(11)</li>
<li>By rule (b): 36 + S(11) = S(36 + 11)</li>
<li>Since 36 + 11 = 47 (established arithmetic fact)</li>
<li>So S(36 + 11) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 36 + 12 = 48. ∎</strong></p>


<h3>643. 36 + 13 = 49</h3>

<ol>
<li>13 = S(12), so 36 + 13 = 36 + S(12)</li>
<li>By rule (b): 36 + S(12) = S(36 + 12)</li>
<li>Since 36 + 12 = 48 (established arithmetic fact)</li>
<li>So S(36 + 12) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 36 + 13 = 49. ∎</strong></p>


<h3>644. 36 + 14 = 50</h3>

<ol>
<li>14 = S(13), so 36 + 14 = 36 + S(13)</li>
<li>By rule (b): 36 + S(13) = S(36 + 13)</li>
<li>Since 36 + 13 = 49 (established arithmetic fact)</li>
<li>So S(36 + 13) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 36 + 14 = 50. ∎</strong></p>


<h3>645. 36 + 15 = 51</h3>

<ol>
<li>15 = S(14), so 36 + 15 = 36 + S(14)</li>
<li>By rule (b): 36 + S(14) = S(36 + 14)</li>
<li>Since 36 + 14 = 50 (established arithmetic fact)</li>
<li>So S(36 + 14) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 36 + 15 = 51. ∎</strong></p>


<h3>646. 36 + 16 = 52</h3>

<ol>
<li>16 = S(15), so 36 + 16 = 36 + S(15)</li>
<li>By rule (b): 36 + S(15) = S(36 + 15)</li>
<li>Since 36 + 15 = 51 (established arithmetic fact)</li>
<li>So S(36 + 15) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 36 + 16 = 52. ∎</strong></p>


<h3>647. 36 + 17 = 53</h3>

<ol>
<li>17 = S(16), so 36 + 17 = 36 + S(16)</li>
<li>By rule (b): 36 + S(16) = S(36 + 16)</li>
<li>Since 36 + 16 = 52 (established arithmetic fact)</li>
<li>So S(36 + 16) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 36 + 17 = 53. ∎</strong></p>


<h3>648. 36 + 18 = 54</h3>

<ol>
<li>18 = S(17), so 36 + 18 = 36 + S(17)</li>
<li>By rule (b): 36 + S(17) = S(36 + 17)</li>
<li>Since 36 + 17 = 53 (established arithmetic fact)</li>
<li>So S(36 + 17) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 36 + 18 = 54. ∎</strong></p>


<h3>649. 36 + 19 = 55</h3>

<ol>
<li>19 = S(18), so 36 + 19 = 36 + S(18)</li>
<li>By rule (b): 36 + S(18) = S(36 + 18)</li>
<li>Since 36 + 18 = 54 (established arithmetic fact)</li>
<li>So S(36 + 18) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 36 + 19 = 55. ∎</strong></p>


<h3>650. 36 + 20 = 56</h3>

<ol>
<li>20 = S(19), so 36 + 20 = 36 + S(19)</li>
<li>By rule (b): 36 + S(19) = S(36 + 19)</li>
<li>Since 36 + 19 = 55 (established arithmetic fact)</li>
<li>So S(36 + 19) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 36 + 20 = 56. ∎</strong></p>


<h3>651. 36 + 21 = 57</h3>

<ol>
<li>21 = S(20), so 36 + 21 = 36 + S(20)</li>
<li>By rule (b): 36 + S(20) = S(36 + 20)</li>
<li>Since 36 + 20 = 56 (established arithmetic fact)</li>
<li>So S(36 + 20) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 36 + 21 = 57. ∎</strong></p>


<h3>652. 36 + 22 = 58</h3>

<ol>
<li>22 = S(21), so 36 + 22 = 36 + S(21)</li>
<li>By rule (b): 36 + S(21) = S(36 + 21)</li>
<li>Since 36 + 21 = 57 (established arithmetic fact)</li>
<li>So S(36 + 21) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 36 + 22 = 58. ∎</strong></p>


<h3>653. 36 + 23 = 59</h3>

<ol>
<li>23 = S(22), so 36 + 23 = 36 + S(22)</li>
<li>By rule (b): 36 + S(22) = S(36 + 22)</li>
<li>Since 36 + 22 = 58 (established arithmetic fact)</li>
<li>So S(36 + 22) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 36 + 23 = 59. ∎</strong></p>


<h3>654. 36 + 24 = 60</h3>

<ol>
<li>24 = S(23), so 36 + 24 = 36 + S(23)</li>
<li>By rule (b): 36 + S(23) = S(36 + 23)</li>
<li>Since 36 + 23 = 59 (established arithmetic fact)</li>
<li>So S(36 + 23) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 36 + 24 = 60. ∎</strong></p>


<h3>655. 36 + 25 = 61</h3>

<ol>
<li>25 = S(24), so 36 + 25 = 36 + S(24)</li>
<li>By rule (b): 36 + S(24) = S(36 + 24)</li>
<li>Since 36 + 24 = 60 (established arithmetic fact)</li>
<li>So S(36 + 24) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 36 + 25 = 61. ∎</strong></p>


<h3>656. 36 + 26 = 62</h3>

<ol>
<li>26 = S(25), so 36 + 26 = 36 + S(25)</li>
<li>By rule (b): 36 + S(25) = S(36 + 25)</li>
<li>Since 36 + 25 = 61 (established arithmetic fact)</li>
<li>So S(36 + 25) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 36 + 26 = 62. ∎</strong></p>


<h3>657. 36 + 27 = 63</h3>

<ol>
<li>27 = S(26), so 36 + 27 = 36 + S(26)</li>
<li>By rule (b): 36 + S(26) = S(36 + 26)</li>
<li>Since 36 + 26 = 62 (established arithmetic fact)</li>
<li>So S(36 + 26) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 36 + 27 = 63. ∎</strong></p>


<h3>658. 36 + 28 = 64</h3>

<ol>
<li>28 = S(27), so 36 + 28 = 36 + S(27)</li>
<li>By rule (b): 36 + S(27) = S(36 + 27)</li>
<li>Since 36 + 27 = 63 (established arithmetic fact)</li>
<li>So S(36 + 27) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 36 + 28 = 64. ∎</strong></p>


<h3>659. 36 + 29 = 65</h3>

<ol>
<li>29 = S(28), so 36 + 29 = 36 + S(28)</li>
<li>By rule (b): 36 + S(28) = S(36 + 28)</li>
<li>Since 36 + 28 = 64 (established arithmetic fact)</li>
<li>So S(36 + 28) = S(64)</li>
<li>And S(64) = 65</li>
</ol>

<p><strong>Therefore: 36 + 29 = 65. ∎</strong></p>


<h3>660. 36 + 30 = 66</h3>

<ol>
<li>30 = S(29), so 36 + 30 = 36 + S(29)</li>
<li>By rule (b): 36 + S(29) = S(36 + 29)</li>
<li>Since 36 + 29 = 65 (established arithmetic fact)</li>
<li>So S(36 + 29) = S(65)</li>
<li>And S(65) = 66</li>
</ol>

<p><strong>Therefore: 36 + 30 = 66. ∎</strong></p>


<h3>661. 36 + 31 = 67</h3>

<ol>
<li>31 = S(30), so 36 + 31 = 36 + S(30)</li>
<li>By rule (b): 36 + S(30) = S(36 + 30)</li>
<li>Since 36 + 30 = 66 (established arithmetic fact)</li>
<li>So S(36 + 30) = S(66)</li>
<li>And S(66) = 67</li>
</ol>

<p><strong>Therefore: 36 + 31 = 67. ∎</strong></p>


<h3>662. 36 + 32 = 68</h3>

<ol>
<li>32 = S(31), so 36 + 32 = 36 + S(31)</li>
<li>By rule (b): 36 + S(31) = S(36 + 31)</li>
<li>Since 36 + 31 = 67 (established arithmetic fact)</li>
<li>So S(36 + 31) = S(67)</li>
<li>And S(67) = 68</li>
</ol>

<p><strong>Therefore: 36 + 32 = 68. ∎</strong></p>


<h3>663. 36 + 33 = 69</h3>

<ol>
<li>33 = S(32), so 36 + 33 = 36 + S(32)</li>
<li>By rule (b): 36 + S(32) = S(36 + 32)</li>
<li>Since 36 + 32 = 68 (established arithmetic fact)</li>
<li>So S(36 + 32) = S(68)</li>
<li>And S(68) = 69</li>
</ol>

<p><strong>Therefore: 36 + 33 = 69. ∎</strong></p>


<h3>664. 36 + 34 = 70</h3>

<ol>
<li>34 = S(33), so 36 + 34 = 36 + S(33)</li>
<li>By rule (b): 36 + S(33) = S(36 + 33)</li>
<li>Since 36 + 33 = 69 (established arithmetic fact)</li>
<li>So S(36 + 33) = S(69)</li>
<li>And S(69) = 70</li>
</ol>

<p><strong>Therefore: 36 + 34 = 70. ∎</strong></p>


<h3>665. 36 + 35 = 71</h3>

<ol>
<li>35 = S(34), so 36 + 35 = 36 + S(34)</li>
<li>By rule (b): 36 + S(34) = S(36 + 34)</li>
<li>Since 36 + 34 = 70 (established arithmetic fact)</li>
<li>So S(36 + 34) = S(70)</li>
<li>And S(70) = 71</li>
</ol>

<p><strong>Therefore: 36 + 35 = 71. ∎</strong></p>


<h3>666. 36 + 36 = 72</h3>

<ol>
<li>36 = S(35), so 36 + 36 = 36 + S(35)</li>
<li>By rule (b): 36 + S(35) = S(36 + 35)</li>
<li>Since 36 + 35 = 71 (established arithmetic fact)</li>
<li>So S(36 + 35) = S(71)</li>
<li>And S(71) = 72</li>
</ol>

<p><strong>Therefore: 36 + 36 = 72. ∎</strong></p>


<h3>667. 37 + 1 = 38</h3>

<ol>
<li>1 = S(0), so 37 + 1 = 37 + S(0)</li>
<li>By rule (b): 37 + S(0) = S(37 + 0)</li>
<li>Since 37 + 0 = 37 (established arithmetic fact)</li>
<li>So S(37 + 0) = S(37)</li>
<li>And S(37) = 38</li>
</ol>

<p><strong>Therefore: 37 + 1 = 38. ∎</strong></p>


<h3>668. 37 + 2 = 39</h3>

<ol>
<li>2 = S(1), so 37 + 2 = 37 + S(1)</li>
<li>By rule (b): 37 + S(1) = S(37 + 1)</li>
<li>Since 37 + 1 = 38 (established arithmetic fact)</li>
<li>So S(37 + 1) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 37 + 2 = 39. ∎</strong></p>


<h3>669. 37 + 3 = 40</h3>

<ol>
<li>3 = S(2), so 37 + 3 = 37 + S(2)</li>
<li>By rule (b): 37 + S(2) = S(37 + 2)</li>
<li>Since 37 + 2 = 39 (established arithmetic fact)</li>
<li>So S(37 + 2) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 37 + 3 = 40. ∎</strong></p>


<h3>670. 37 + 4 = 41</h3>

<ol>
<li>4 = S(3), so 37 + 4 = 37 + S(3)</li>
<li>By rule (b): 37 + S(3) = S(37 + 3)</li>
<li>Since 37 + 3 = 40 (established arithmetic fact)</li>
<li>So S(37 + 3) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 37 + 4 = 41. ∎</strong></p>


<h3>671. 37 + 5 = 42</h3>

<ol>
<li>5 = S(4), so 37 + 5 = 37 + S(4)</li>
<li>By rule (b): 37 + S(4) = S(37 + 4)</li>
<li>Since 37 + 4 = 41 (established arithmetic fact)</li>
<li>So S(37 + 4) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 37 + 5 = 42. ∎</strong></p>


<h3>672. 37 + 6 = 43</h3>

<ol>
<li>6 = S(5), so 37 + 6 = 37 + S(5)</li>
<li>By rule (b): 37 + S(5) = S(37 + 5)</li>
<li>Since 37 + 5 = 42 (established arithmetic fact)</li>
<li>So S(37 + 5) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 37 + 6 = 43. ∎</strong></p>


<h3>673. 37 + 7 = 44</h3>

<ol>
<li>7 = S(6), so 37 + 7 = 37 + S(6)</li>
<li>By rule (b): 37 + S(6) = S(37 + 6)</li>
<li>Since 37 + 6 = 43 (established arithmetic fact)</li>
<li>So S(37 + 6) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 37 + 7 = 44. ∎</strong></p>


<h3>674. 37 + 8 = 45</h3>

<ol>
<li>8 = S(7), so 37 + 8 = 37 + S(7)</li>
<li>By rule (b): 37 + S(7) = S(37 + 7)</li>
<li>Since 37 + 7 = 44 (established arithmetic fact)</li>
<li>So S(37 + 7) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 37 + 8 = 45. ∎</strong></p>


<h3>675. 37 + 9 = 46</h3>

<ol>
<li>9 = S(8), so 37 + 9 = 37 + S(8)</li>
<li>By rule (b): 37 + S(8) = S(37 + 8)</li>
<li>Since 37 + 8 = 45 (established arithmetic fact)</li>
<li>So S(37 + 8) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 37 + 9 = 46. ∎</strong></p>


<h3>676. 37 + 10 = 47</h3>

<ol>
<li>10 = S(9), so 37 + 10 = 37 + S(9)</li>
<li>By rule (b): 37 + S(9) = S(37 + 9)</li>
<li>Since 37 + 9 = 46 (established arithmetic fact)</li>
<li>So S(37 + 9) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 37 + 10 = 47. ∎</strong></p>


<h3>677. 37 + 11 = 48</h3>

<ol>
<li>11 = S(10), so 37 + 11 = 37 + S(10)</li>
<li>By rule (b): 37 + S(10) = S(37 + 10)</li>
<li>Since 37 + 10 = 47 (established arithmetic fact)</li>
<li>So S(37 + 10) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 37 + 11 = 48. ∎</strong></p>


<h3>678. 37 + 12 = 49</h3>

<ol>
<li>12 = S(11), so 37 + 12 = 37 + S(11)</li>
<li>By rule (b): 37 + S(11) = S(37 + 11)</li>
<li>Since 37 + 11 = 48 (established arithmetic fact)</li>
<li>So S(37 + 11) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 37 + 12 = 49. ∎</strong></p>


<h3>679. 37 + 13 = 50</h3>

<ol>
<li>13 = S(12), so 37 + 13 = 37 + S(12)</li>
<li>By rule (b): 37 + S(12) = S(37 + 12)</li>
<li>Since 37 + 12 = 49 (established arithmetic fact)</li>
<li>So S(37 + 12) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 37 + 13 = 50. ∎</strong></p>


<h3>680. 37 + 14 = 51</h3>

<ol>
<li>14 = S(13), so 37 + 14 = 37 + S(13)</li>
<li>By rule (b): 37 + S(13) = S(37 + 13)</li>
<li>Since 37 + 13 = 50 (established arithmetic fact)</li>
<li>So S(37 + 13) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 37 + 14 = 51. ∎</strong></p>


<h3>681. 37 + 15 = 52</h3>

<ol>
<li>15 = S(14), so 37 + 15 = 37 + S(14)</li>
<li>By rule (b): 37 + S(14) = S(37 + 14)</li>
<li>Since 37 + 14 = 51 (established arithmetic fact)</li>
<li>So S(37 + 14) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 37 + 15 = 52. ∎</strong></p>


<h3>682. 37 + 16 = 53</h3>

<ol>
<li>16 = S(15), so 37 + 16 = 37 + S(15)</li>
<li>By rule (b): 37 + S(15) = S(37 + 15)</li>
<li>Since 37 + 15 = 52 (established arithmetic fact)</li>
<li>So S(37 + 15) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 37 + 16 = 53. ∎</strong></p>


<h3>683. 37 + 17 = 54</h3>

<ol>
<li>17 = S(16), so 37 + 17 = 37 + S(16)</li>
<li>By rule (b): 37 + S(16) = S(37 + 16)</li>
<li>Since 37 + 16 = 53 (established arithmetic fact)</li>
<li>So S(37 + 16) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 37 + 17 = 54. ∎</strong></p>


<h3>684. 37 + 18 = 55</h3>

<ol>
<li>18 = S(17), so 37 + 18 = 37 + S(17)</li>
<li>By rule (b): 37 + S(17) = S(37 + 17)</li>
<li>Since 37 + 17 = 54 (established arithmetic fact)</li>
<li>So S(37 + 17) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 37 + 18 = 55. ∎</strong></p>


<h3>685. 37 + 19 = 56</h3>

<ol>
<li>19 = S(18), so 37 + 19 = 37 + S(18)</li>
<li>By rule (b): 37 + S(18) = S(37 + 18)</li>
<li>Since 37 + 18 = 55 (established arithmetic fact)</li>
<li>So S(37 + 18) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 37 + 19 = 56. ∎</strong></p>


<h3>686. 37 + 20 = 57</h3>

<ol>
<li>20 = S(19), so 37 + 20 = 37 + S(19)</li>
<li>By rule (b): 37 + S(19) = S(37 + 19)</li>
<li>Since 37 + 19 = 56 (established arithmetic fact)</li>
<li>So S(37 + 19) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 37 + 20 = 57. ∎</strong></p>


<h3>687. 37 + 21 = 58</h3>

<ol>
<li>21 = S(20), so 37 + 21 = 37 + S(20)</li>
<li>By rule (b): 37 + S(20) = S(37 + 20)</li>
<li>Since 37 + 20 = 57 (established arithmetic fact)</li>
<li>So S(37 + 20) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 37 + 21 = 58. ∎</strong></p>


<h3>688. 37 + 22 = 59</h3>

<ol>
<li>22 = S(21), so 37 + 22 = 37 + S(21)</li>
<li>By rule (b): 37 + S(21) = S(37 + 21)</li>
<li>Since 37 + 21 = 58 (established arithmetic fact)</li>
<li>So S(37 + 21) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 37 + 22 = 59. ∎</strong></p>


<h3>689. 37 + 23 = 60</h3>

<ol>
<li>23 = S(22), so 37 + 23 = 37 + S(22)</li>
<li>By rule (b): 37 + S(22) = S(37 + 22)</li>
<li>Since 37 + 22 = 59 (established arithmetic fact)</li>
<li>So S(37 + 22) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 37 + 23 = 60. ∎</strong></p>


<h3>690. 37 + 24 = 61</h3>

<ol>
<li>24 = S(23), so 37 + 24 = 37 + S(23)</li>
<li>By rule (b): 37 + S(23) = S(37 + 23)</li>
<li>Since 37 + 23 = 60 (established arithmetic fact)</li>
<li>So S(37 + 23) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 37 + 24 = 61. ∎</strong></p>


<h3>691. 37 + 25 = 62</h3>

<ol>
<li>25 = S(24), so 37 + 25 = 37 + S(24)</li>
<li>By rule (b): 37 + S(24) = S(37 + 24)</li>
<li>Since 37 + 24 = 61 (established arithmetic fact)</li>
<li>So S(37 + 24) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 37 + 25 = 62. ∎</strong></p>


<h3>692. 37 + 26 = 63</h3>

<ol>
<li>26 = S(25), so 37 + 26 = 37 + S(25)</li>
<li>By rule (b): 37 + S(25) = S(37 + 25)</li>
<li>Since 37 + 25 = 62 (established arithmetic fact)</li>
<li>So S(37 + 25) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 37 + 26 = 63. ∎</strong></p>


<h3>693. 37 + 27 = 64</h3>

<ol>
<li>27 = S(26), so 37 + 27 = 37 + S(26)</li>
<li>By rule (b): 37 + S(26) = S(37 + 26)</li>
<li>Since 37 + 26 = 63 (established arithmetic fact)</li>
<li>So S(37 + 26) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 37 + 27 = 64. ∎</strong></p>


<h3>694. 37 + 28 = 65</h3>

<ol>
<li>28 = S(27), so 37 + 28 = 37 + S(27)</li>
<li>By rule (b): 37 + S(27) = S(37 + 27)</li>
<li>Since 37 + 27 = 64 (established arithmetic fact)</li>
<li>So S(37 + 27) = S(64)</li>
<li>And S(64) = 65</li>
</ol>

<p><strong>Therefore: 37 + 28 = 65. ∎</strong></p>


<h3>695. 37 + 29 = 66</h3>

<ol>
<li>29 = S(28), so 37 + 29 = 37 + S(28)</li>
<li>By rule (b): 37 + S(28) = S(37 + 28)</li>
<li>Since 37 + 28 = 65 (established arithmetic fact)</li>
<li>So S(37 + 28) = S(65)</li>
<li>And S(65) = 66</li>
</ol>

<p><strong>Therefore: 37 + 29 = 66. ∎</strong></p>


<h3>696. 37 + 30 = 67</h3>

<ol>
<li>30 = S(29), so 37 + 30 = 37 + S(29)</li>
<li>By rule (b): 37 + S(29) = S(37 + 29)</li>
<li>Since 37 + 29 = 66 (established arithmetic fact)</li>
<li>So S(37 + 29) = S(66)</li>
<li>And S(66) = 67</li>
</ol>

<p><strong>Therefore: 37 + 30 = 67. ∎</strong></p>


<h3>697. 37 + 31 = 68</h3>

<ol>
<li>31 = S(30), so 37 + 31 = 37 + S(30)</li>
<li>By rule (b): 37 + S(30) = S(37 + 30)</li>
<li>Since 37 + 30 = 67 (established arithmetic fact)</li>
<li>So S(37 + 30) = S(67)</li>
<li>And S(67) = 68</li>
</ol>

<p><strong>Therefore: 37 + 31 = 68. ∎</strong></p>


<h3>698. 37 + 32 = 69</h3>

<ol>
<li>32 = S(31), so 37 + 32 = 37 + S(31)</li>
<li>By rule (b): 37 + S(31) = S(37 + 31)</li>
<li>Since 37 + 31 = 68 (established arithmetic fact)</li>
<li>So S(37 + 31) = S(68)</li>
<li>And S(68) = 69</li>
</ol>

<p><strong>Therefore: 37 + 32 = 69. ∎</strong></p>


<h3>699. 37 + 33 = 70</h3>

<ol>
<li>33 = S(32), so 37 + 33 = 37 + S(32)</li>
<li>By rule (b): 37 + S(32) = S(37 + 32)</li>
<li>Since 37 + 32 = 69 (established arithmetic fact)</li>
<li>So S(37 + 32) = S(69)</li>
<li>And S(69) = 70</li>
</ol>

<p><strong>Therefore: 37 + 33 = 70. ∎</strong></p>


<h3>700. 37 + 34 = 71</h3>

<ol>
<li>34 = S(33), so 37 + 34 = 37 + S(33)</li>
<li>By rule (b): 37 + S(33) = S(37 + 33)</li>
<li>Since 37 + 33 = 70 (established arithmetic fact)</li>
<li>So S(37 + 33) = S(70)</li>
<li>And S(70) = 71</li>
</ol>

<p><strong>Therefore: 37 + 34 = 71. ∎</strong></p>


<h3>701. 37 + 35 = 72</h3>

<ol>
<li>35 = S(34), so 37 + 35 = 37 + S(34)</li>
<li>By rule (b): 37 + S(34) = S(37 + 34)</li>
<li>Since 37 + 34 = 71 (established arithmetic fact)</li>
<li>So S(37 + 34) = S(71)</li>
<li>And S(71) = 72</li>
</ol>

<p><strong>Therefore: 37 + 35 = 72. ∎</strong></p>


<h3>702. 37 + 36 = 73</h3>

<ol>
<li>36 = S(35), so 37 + 36 = 37 + S(35)</li>
<li>By rule (b): 37 + S(35) = S(37 + 35)</li>
<li>Since 37 + 35 = 72 (established arithmetic fact)</li>
<li>So S(37 + 35) = S(72)</li>
<li>And S(72) = 73</li>
</ol>

<p><strong>Therefore: 37 + 36 = 73. ∎</strong></p>


<h3>703. 37 + 37 = 74</h3>

<ol>
<li>37 = S(36), so 37 + 37 = 37 + S(36)</li>
<li>By rule (b): 37 + S(36) = S(37 + 36)</li>
<li>Since 37 + 36 = 73 (established arithmetic fact)</li>
<li>So S(37 + 36) = S(73)</li>
<li>And S(73) = 74</li>
</ol>

<p><strong>Therefore: 37 + 37 = 74. ∎</strong></p>


<h3>704. 38 + 1 = 39</h3>

<ol>
<li>1 = S(0), so 38 + 1 = 38 + S(0)</li>
<li>By rule (b): 38 + S(0) = S(38 + 0)</li>
<li>Since 38 + 0 = 38 (established arithmetic fact)</li>
<li>So S(38 + 0) = S(38)</li>
<li>And S(38) = 39</li>
</ol>

<p><strong>Therefore: 38 + 1 = 39. ∎</strong></p>


<h3>705. 38 + 2 = 40</h3>

<ol>
<li>2 = S(1), so 38 + 2 = 38 + S(1)</li>
<li>By rule (b): 38 + S(1) = S(38 + 1)</li>
<li>Since 38 + 1 = 39 (established arithmetic fact)</li>
<li>So S(38 + 1) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 38 + 2 = 40. ∎</strong></p>


<h3>706. 38 + 3 = 41</h3>

<ol>
<li>3 = S(2), so 38 + 3 = 38 + S(2)</li>
<li>By rule (b): 38 + S(2) = S(38 + 2)</li>
<li>Since 38 + 2 = 40 (established arithmetic fact)</li>
<li>So S(38 + 2) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 38 + 3 = 41. ∎</strong></p>


<h3>707. 38 + 4 = 42</h3>

<ol>
<li>4 = S(3), so 38 + 4 = 38 + S(3)</li>
<li>By rule (b): 38 + S(3) = S(38 + 3)</li>
<li>Since 38 + 3 = 41 (established arithmetic fact)</li>
<li>So S(38 + 3) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 38 + 4 = 42. ∎</strong></p>


<h3>708. 38 + 5 = 43</h3>

<ol>
<li>5 = S(4), so 38 + 5 = 38 + S(4)</li>
<li>By rule (b): 38 + S(4) = S(38 + 4)</li>
<li>Since 38 + 4 = 42 (established arithmetic fact)</li>
<li>So S(38 + 4) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 38 + 5 = 43. ∎</strong></p>


<h3>709. 38 + 6 = 44</h3>

<ol>
<li>6 = S(5), so 38 + 6 = 38 + S(5)</li>
<li>By rule (b): 38 + S(5) = S(38 + 5)</li>
<li>Since 38 + 5 = 43 (established arithmetic fact)</li>
<li>So S(38 + 5) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 38 + 6 = 44. ∎</strong></p>


<h3>710. 38 + 7 = 45</h3>

<ol>
<li>7 = S(6), so 38 + 7 = 38 + S(6)</li>
<li>By rule (b): 38 + S(6) = S(38 + 6)</li>
<li>Since 38 + 6 = 44 (established arithmetic fact)</li>
<li>So S(38 + 6) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 38 + 7 = 45. ∎</strong></p>


<h3>711. 38 + 8 = 46</h3>

<ol>
<li>8 = S(7), so 38 + 8 = 38 + S(7)</li>
<li>By rule (b): 38 + S(7) = S(38 + 7)</li>
<li>Since 38 + 7 = 45 (established arithmetic fact)</li>
<li>So S(38 + 7) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 38 + 8 = 46. ∎</strong></p>


<h3>712. 38 + 9 = 47</h3>

<ol>
<li>9 = S(8), so 38 + 9 = 38 + S(8)</li>
<li>By rule (b): 38 + S(8) = S(38 + 8)</li>
<li>Since 38 + 8 = 46 (established arithmetic fact)</li>
<li>So S(38 + 8) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 38 + 9 = 47. ∎</strong></p>


<h3>713. 38 + 10 = 48</h3>

<ol>
<li>10 = S(9), so 38 + 10 = 38 + S(9)</li>
<li>By rule (b): 38 + S(9) = S(38 + 9)</li>
<li>Since 38 + 9 = 47 (established arithmetic fact)</li>
<li>So S(38 + 9) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 38 + 10 = 48. ∎</strong></p>


<h3>714. 38 + 11 = 49</h3>

<ol>
<li>11 = S(10), so 38 + 11 = 38 + S(10)</li>
<li>By rule (b): 38 + S(10) = S(38 + 10)</li>
<li>Since 38 + 10 = 48 (established arithmetic fact)</li>
<li>So S(38 + 10) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 38 + 11 = 49. ∎</strong></p>


<h3>715. 38 + 12 = 50</h3>

<ol>
<li>12 = S(11), so 38 + 12 = 38 + S(11)</li>
<li>By rule (b): 38 + S(11) = S(38 + 11)</li>
<li>Since 38 + 11 = 49 (established arithmetic fact)</li>
<li>So S(38 + 11) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 38 + 12 = 50. ∎</strong></p>


<h3>716. 38 + 13 = 51</h3>

<ol>
<li>13 = S(12), so 38 + 13 = 38 + S(12)</li>
<li>By rule (b): 38 + S(12) = S(38 + 12)</li>
<li>Since 38 + 12 = 50 (established arithmetic fact)</li>
<li>So S(38 + 12) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 38 + 13 = 51. ∎</strong></p>


<h3>717. 38 + 14 = 52</h3>

<ol>
<li>14 = S(13), so 38 + 14 = 38 + S(13)</li>
<li>By rule (b): 38 + S(13) = S(38 + 13)</li>
<li>Since 38 + 13 = 51 (established arithmetic fact)</li>
<li>So S(38 + 13) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 38 + 14 = 52. ∎</strong></p>


<h3>718. 38 + 15 = 53</h3>

<ol>
<li>15 = S(14), so 38 + 15 = 38 + S(14)</li>
<li>By rule (b): 38 + S(14) = S(38 + 14)</li>
<li>Since 38 + 14 = 52 (established arithmetic fact)</li>
<li>So S(38 + 14) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 38 + 15 = 53. ∎</strong></p>


<h3>719. 38 + 16 = 54</h3>

<ol>
<li>16 = S(15), so 38 + 16 = 38 + S(15)</li>
<li>By rule (b): 38 + S(15) = S(38 + 15)</li>
<li>Since 38 + 15 = 53 (established arithmetic fact)</li>
<li>So S(38 + 15) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 38 + 16 = 54. ∎</strong></p>


<h3>720. 38 + 17 = 55</h3>

<ol>
<li>17 = S(16), so 38 + 17 = 38 + S(16)</li>
<li>By rule (b): 38 + S(16) = S(38 + 16)</li>
<li>Since 38 + 16 = 54 (established arithmetic fact)</li>
<li>So S(38 + 16) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 38 + 17 = 55. ∎</strong></p>


<h3>721. 38 + 18 = 56</h3>

<ol>
<li>18 = S(17), so 38 + 18 = 38 + S(17)</li>
<li>By rule (b): 38 + S(17) = S(38 + 17)</li>
<li>Since 38 + 17 = 55 (established arithmetic fact)</li>
<li>So S(38 + 17) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 38 + 18 = 56. ∎</strong></p>


<h3>722. 38 + 19 = 57</h3>

<ol>
<li>19 = S(18), so 38 + 19 = 38 + S(18)</li>
<li>By rule (b): 38 + S(18) = S(38 + 18)</li>
<li>Since 38 + 18 = 56 (established arithmetic fact)</li>
<li>So S(38 + 18) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 38 + 19 = 57. ∎</strong></p>


<h3>723. 38 + 20 = 58</h3>

<ol>
<li>20 = S(19), so 38 + 20 = 38 + S(19)</li>
<li>By rule (b): 38 + S(19) = S(38 + 19)</li>
<li>Since 38 + 19 = 57 (established arithmetic fact)</li>
<li>So S(38 + 19) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 38 + 20 = 58. ∎</strong></p>


<h3>724. 38 + 21 = 59</h3>

<ol>
<li>21 = S(20), so 38 + 21 = 38 + S(20)</li>
<li>By rule (b): 38 + S(20) = S(38 + 20)</li>
<li>Since 38 + 20 = 58 (established arithmetic fact)</li>
<li>So S(38 + 20) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 38 + 21 = 59. ∎</strong></p>


<h3>725. 38 + 22 = 60</h3>

<ol>
<li>22 = S(21), so 38 + 22 = 38 + S(21)</li>
<li>By rule (b): 38 + S(21) = S(38 + 21)</li>
<li>Since 38 + 21 = 59 (established arithmetic fact)</li>
<li>So S(38 + 21) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 38 + 22 = 60. ∎</strong></p>


<h3>726. 38 + 23 = 61</h3>

<ol>
<li>23 = S(22), so 38 + 23 = 38 + S(22)</li>
<li>By rule (b): 38 + S(22) = S(38 + 22)</li>
<li>Since 38 + 22 = 60 (established arithmetic fact)</li>
<li>So S(38 + 22) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 38 + 23 = 61. ∎</strong></p>


<h3>727. 38 + 24 = 62</h3>

<ol>
<li>24 = S(23), so 38 + 24 = 38 + S(23)</li>
<li>By rule (b): 38 + S(23) = S(38 + 23)</li>
<li>Since 38 + 23 = 61 (established arithmetic fact)</li>
<li>So S(38 + 23) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 38 + 24 = 62. ∎</strong></p>


<h3>728. 38 + 25 = 63</h3>

<ol>
<li>25 = S(24), so 38 + 25 = 38 + S(24)</li>
<li>By rule (b): 38 + S(24) = S(38 + 24)</li>
<li>Since 38 + 24 = 62 (established arithmetic fact)</li>
<li>So S(38 + 24) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 38 + 25 = 63. ∎</strong></p>


<h3>729. 38 + 26 = 64</h3>

<ol>
<li>26 = S(25), so 38 + 26 = 38 + S(25)</li>
<li>By rule (b): 38 + S(25) = S(38 + 25)</li>
<li>Since 38 + 25 = 63 (established arithmetic fact)</li>
<li>So S(38 + 25) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 38 + 26 = 64. ∎</strong></p>


<h3>730. 38 + 27 = 65</h3>

<ol>
<li>27 = S(26), so 38 + 27 = 38 + S(26)</li>
<li>By rule (b): 38 + S(26) = S(38 + 26)</li>
<li>Since 38 + 26 = 64 (established arithmetic fact)</li>
<li>So S(38 + 26) = S(64)</li>
<li>And S(64) = 65</li>
</ol>

<p><strong>Therefore: 38 + 27 = 65. ∎</strong></p>


<h3>731. 38 + 28 = 66</h3>

<ol>
<li>28 = S(27), so 38 + 28 = 38 + S(27)</li>
<li>By rule (b): 38 + S(27) = S(38 + 27)</li>
<li>Since 38 + 27 = 65 (established arithmetic fact)</li>
<li>So S(38 + 27) = S(65)</li>
<li>And S(65) = 66</li>
</ol>

<p><strong>Therefore: 38 + 28 = 66. ∎</strong></p>


<h3>732. 38 + 29 = 67</h3>

<ol>
<li>29 = S(28), so 38 + 29 = 38 + S(28)</li>
<li>By rule (b): 38 + S(28) = S(38 + 28)</li>
<li>Since 38 + 28 = 66 (established arithmetic fact)</li>
<li>So S(38 + 28) = S(66)</li>
<li>And S(66) = 67</li>
</ol>

<p><strong>Therefore: 38 + 29 = 67. ∎</strong></p>


<h3>733. 38 + 30 = 68</h3>

<ol>
<li>30 = S(29), so 38 + 30 = 38 + S(29)</li>
<li>By rule (b): 38 + S(29) = S(38 + 29)</li>
<li>Since 38 + 29 = 67 (established arithmetic fact)</li>
<li>So S(38 + 29) = S(67)</li>
<li>And S(67) = 68</li>
</ol>

<p><strong>Therefore: 38 + 30 = 68. ∎</strong></p>


<h3>734. 38 + 31 = 69</h3>

<ol>
<li>31 = S(30), so 38 + 31 = 38 + S(30)</li>
<li>By rule (b): 38 + S(30) = S(38 + 30)</li>
<li>Since 38 + 30 = 68 (established arithmetic fact)</li>
<li>So S(38 + 30) = S(68)</li>
<li>And S(68) = 69</li>
</ol>

<p><strong>Therefore: 38 + 31 = 69. ∎</strong></p>


<h3>735. 38 + 32 = 70</h3>

<ol>
<li>32 = S(31), so 38 + 32 = 38 + S(31)</li>
<li>By rule (b): 38 + S(31) = S(38 + 31)</li>
<li>Since 38 + 31 = 69 (established arithmetic fact)</li>
<li>So S(38 + 31) = S(69)</li>
<li>And S(69) = 70</li>
</ol>

<p><strong>Therefore: 38 + 32 = 70. ∎</strong></p>


<h3>736. 38 + 33 = 71</h3>

<ol>
<li>33 = S(32), so 38 + 33 = 38 + S(32)</li>
<li>By rule (b): 38 + S(32) = S(38 + 32)</li>
<li>Since 38 + 32 = 70 (established arithmetic fact)</li>
<li>So S(38 + 32) = S(70)</li>
<li>And S(70) = 71</li>
</ol>

<p><strong>Therefore: 38 + 33 = 71. ∎</strong></p>


<h3>737. 38 + 34 = 72</h3>

<ol>
<li>34 = S(33), so 38 + 34 = 38 + S(33)</li>
<li>By rule (b): 38 + S(33) = S(38 + 33)</li>
<li>Since 38 + 33 = 71 (established arithmetic fact)</li>
<li>So S(38 + 33) = S(71)</li>
<li>And S(71) = 72</li>
</ol>

<p><strong>Therefore: 38 + 34 = 72. ∎</strong></p>


<h3>738. 38 + 35 = 73</h3>

<ol>
<li>35 = S(34), so 38 + 35 = 38 + S(34)</li>
<li>By rule (b): 38 + S(34) = S(38 + 34)</li>
<li>Since 38 + 34 = 72 (established arithmetic fact)</li>
<li>So S(38 + 34) = S(72)</li>
<li>And S(72) = 73</li>
</ol>

<p><strong>Therefore: 38 + 35 = 73. ∎</strong></p>


<h3>739. 38 + 36 = 74</h3>

<ol>
<li>36 = S(35), so 38 + 36 = 38 + S(35)</li>
<li>By rule (b): 38 + S(35) = S(38 + 35)</li>
<li>Since 38 + 35 = 73 (established arithmetic fact)</li>
<li>So S(38 + 35) = S(73)</li>
<li>And S(73) = 74</li>
</ol>

<p><strong>Therefore: 38 + 36 = 74. ∎</strong></p>


<h3>740. 38 + 37 = 75</h3>

<ol>
<li>37 = S(36), so 38 + 37 = 38 + S(36)</li>
<li>By rule (b): 38 + S(36) = S(38 + 36)</li>
<li>Since 38 + 36 = 74 (established arithmetic fact)</li>
<li>So S(38 + 36) = S(74)</li>
<li>And S(74) = 75</li>
</ol>

<p><strong>Therefore: 38 + 37 = 75. ∎</strong></p>


<h3>741. 38 + 38 = 76</h3>

<ol>
<li>38 = S(37), so 38 + 38 = 38 + S(37)</li>
<li>By rule (b): 38 + S(37) = S(38 + 37)</li>
<li>Since 38 + 37 = 75 (established arithmetic fact)</li>
<li>So S(38 + 37) = S(75)</li>
<li>And S(75) = 76</li>
</ol>

<p><strong>Therefore: 38 + 38 = 76. ∎</strong></p>


<h3>742. 39 + 1 = 40</h3>

<ol>
<li>1 = S(0), so 39 + 1 = 39 + S(0)</li>
<li>By rule (b): 39 + S(0) = S(39 + 0)</li>
<li>Since 39 + 0 = 39 (established arithmetic fact)</li>
<li>So S(39 + 0) = S(39)</li>
<li>And S(39) = 40</li>
</ol>

<p><strong>Therefore: 39 + 1 = 40. ∎</strong></p>


<h3>743. 39 + 2 = 41</h3>

<ol>
<li>2 = S(1), so 39 + 2 = 39 + S(1)</li>
<li>By rule (b): 39 + S(1) = S(39 + 1)</li>
<li>Since 39 + 1 = 40 (established arithmetic fact)</li>
<li>So S(39 + 1) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 39 + 2 = 41. ∎</strong></p>


<h3>744. 39 + 3 = 42</h3>

<ol>
<li>3 = S(2), so 39 + 3 = 39 + S(2)</li>
<li>By rule (b): 39 + S(2) = S(39 + 2)</li>
<li>Since 39 + 2 = 41 (established arithmetic fact)</li>
<li>So S(39 + 2) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 39 + 3 = 42. ∎</strong></p>


<h3>745. 39 + 4 = 43</h3>

<ol>
<li>4 = S(3), so 39 + 4 = 39 + S(3)</li>
<li>By rule (b): 39 + S(3) = S(39 + 3)</li>
<li>Since 39 + 3 = 42 (established arithmetic fact)</li>
<li>So S(39 + 3) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 39 + 4 = 43. ∎</strong></p>


<h3>746. 39 + 5 = 44</h3>

<ol>
<li>5 = S(4), so 39 + 5 = 39 + S(4)</li>
<li>By rule (b): 39 + S(4) = S(39 + 4)</li>
<li>Since 39 + 4 = 43 (established arithmetic fact)</li>
<li>So S(39 + 4) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 39 + 5 = 44. ∎</strong></p>


<h3>747. 39 + 6 = 45</h3>

<ol>
<li>6 = S(5), so 39 + 6 = 39 + S(5)</li>
<li>By rule (b): 39 + S(5) = S(39 + 5)</li>
<li>Since 39 + 5 = 44 (established arithmetic fact)</li>
<li>So S(39 + 5) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 39 + 6 = 45. ∎</strong></p>


<h3>748. 39 + 7 = 46</h3>

<ol>
<li>7 = S(6), so 39 + 7 = 39 + S(6)</li>
<li>By rule (b): 39 + S(6) = S(39 + 6)</li>
<li>Since 39 + 6 = 45 (established arithmetic fact)</li>
<li>So S(39 + 6) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 39 + 7 = 46. ∎</strong></p>


<h3>749. 39 + 8 = 47</h3>

<ol>
<li>8 = S(7), so 39 + 8 = 39 + S(7)</li>
<li>By rule (b): 39 + S(7) = S(39 + 7)</li>
<li>Since 39 + 7 = 46 (established arithmetic fact)</li>
<li>So S(39 + 7) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 39 + 8 = 47. ∎</strong></p>


<h3>750. 39 + 9 = 48</h3>

<ol>
<li>9 = S(8), so 39 + 9 = 39 + S(8)</li>
<li>By rule (b): 39 + S(8) = S(39 + 8)</li>
<li>Since 39 + 8 = 47 (established arithmetic fact)</li>
<li>So S(39 + 8) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 39 + 9 = 48. ∎</strong></p>


<h3>751. 39 + 10 = 49</h3>

<ol>
<li>10 = S(9), so 39 + 10 = 39 + S(9)</li>
<li>By rule (b): 39 + S(9) = S(39 + 9)</li>
<li>Since 39 + 9 = 48 (established arithmetic fact)</li>
<li>So S(39 + 9) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 39 + 10 = 49. ∎</strong></p>


<h3>752. 39 + 11 = 50</h3>

<ol>
<li>11 = S(10), so 39 + 11 = 39 + S(10)</li>
<li>By rule (b): 39 + S(10) = S(39 + 10)</li>
<li>Since 39 + 10 = 49 (established arithmetic fact)</li>
<li>So S(39 + 10) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 39 + 11 = 50. ∎</strong></p>


<h3>753. 39 + 12 = 51</h3>

<ol>
<li>12 = S(11), so 39 + 12 = 39 + S(11)</li>
<li>By rule (b): 39 + S(11) = S(39 + 11)</li>
<li>Since 39 + 11 = 50 (established arithmetic fact)</li>
<li>So S(39 + 11) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 39 + 12 = 51. ∎</strong></p>


<h3>754. 39 + 13 = 52</h3>

<ol>
<li>13 = S(12), so 39 + 13 = 39 + S(12)</li>
<li>By rule (b): 39 + S(12) = S(39 + 12)</li>
<li>Since 39 + 12 = 51 (established arithmetic fact)</li>
<li>So S(39 + 12) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 39 + 13 = 52. ∎</strong></p>


<h3>755. 39 + 14 = 53</h3>

<ol>
<li>14 = S(13), so 39 + 14 = 39 + S(13)</li>
<li>By rule (b): 39 + S(13) = S(39 + 13)</li>
<li>Since 39 + 13 = 52 (established arithmetic fact)</li>
<li>So S(39 + 13) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 39 + 14 = 53. ∎</strong></p>


<h3>756. 39 + 15 = 54</h3>

<ol>
<li>15 = S(14), so 39 + 15 = 39 + S(14)</li>
<li>By rule (b): 39 + S(14) = S(39 + 14)</li>
<li>Since 39 + 14 = 53 (established arithmetic fact)</li>
<li>So S(39 + 14) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 39 + 15 = 54. ∎</strong></p>


<h3>757. 39 + 16 = 55</h3>

<ol>
<li>16 = S(15), so 39 + 16 = 39 + S(15)</li>
<li>By rule (b): 39 + S(15) = S(39 + 15)</li>
<li>Since 39 + 15 = 54 (established arithmetic fact)</li>
<li>So S(39 + 15) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 39 + 16 = 55. ∎</strong></p>


<h3>758. 39 + 17 = 56</h3>

<ol>
<li>17 = S(16), so 39 + 17 = 39 + S(16)</li>
<li>By rule (b): 39 + S(16) = S(39 + 16)</li>
<li>Since 39 + 16 = 55 (established arithmetic fact)</li>
<li>So S(39 + 16) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 39 + 17 = 56. ∎</strong></p>


<h3>759. 39 + 18 = 57</h3>

<ol>
<li>18 = S(17), so 39 + 18 = 39 + S(17)</li>
<li>By rule (b): 39 + S(17) = S(39 + 17)</li>
<li>Since 39 + 17 = 56 (established arithmetic fact)</li>
<li>So S(39 + 17) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 39 + 18 = 57. ∎</strong></p>


<h3>760. 39 + 19 = 58</h3>

<ol>
<li>19 = S(18), so 39 + 19 = 39 + S(18)</li>
<li>By rule (b): 39 + S(18) = S(39 + 18)</li>
<li>Since 39 + 18 = 57 (established arithmetic fact)</li>
<li>So S(39 + 18) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 39 + 19 = 58. ∎</strong></p>


<h3>761. 39 + 20 = 59</h3>

<ol>
<li>20 = S(19), so 39 + 20 = 39 + S(19)</li>
<li>By rule (b): 39 + S(19) = S(39 + 19)</li>
<li>Since 39 + 19 = 58 (established arithmetic fact)</li>
<li>So S(39 + 19) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 39 + 20 = 59. ∎</strong></p>


<h3>762. 39 + 21 = 60</h3>

<ol>
<li>21 = S(20), so 39 + 21 = 39 + S(20)</li>
<li>By rule (b): 39 + S(20) = S(39 + 20)</li>
<li>Since 39 + 20 = 59 (established arithmetic fact)</li>
<li>So S(39 + 20) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 39 + 21 = 60. ∎</strong></p>


<h3>763. 39 + 22 = 61</h3>

<ol>
<li>22 = S(21), so 39 + 22 = 39 + S(21)</li>
<li>By rule (b): 39 + S(21) = S(39 + 21)</li>
<li>Since 39 + 21 = 60 (established arithmetic fact)</li>
<li>So S(39 + 21) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 39 + 22 = 61. ∎</strong></p>


<h3>764. 39 + 23 = 62</h3>

<ol>
<li>23 = S(22), so 39 + 23 = 39 + S(22)</li>
<li>By rule (b): 39 + S(22) = S(39 + 22)</li>
<li>Since 39 + 22 = 61 (established arithmetic fact)</li>
<li>So S(39 + 22) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 39 + 23 = 62. ∎</strong></p>


<h3>765. 39 + 24 = 63</h3>

<ol>
<li>24 = S(23), so 39 + 24 = 39 + S(23)</li>
<li>By rule (b): 39 + S(23) = S(39 + 23)</li>
<li>Since 39 + 23 = 62 (established arithmetic fact)</li>
<li>So S(39 + 23) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 39 + 24 = 63. ∎</strong></p>


<h3>766. 39 + 25 = 64</h3>

<ol>
<li>25 = S(24), so 39 + 25 = 39 + S(24)</li>
<li>By rule (b): 39 + S(24) = S(39 + 24)</li>
<li>Since 39 + 24 = 63 (established arithmetic fact)</li>
<li>So S(39 + 24) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 39 + 25 = 64. ∎</strong></p>


<h3>767. 39 + 26 = 65</h3>

<ol>
<li>26 = S(25), so 39 + 26 = 39 + S(25)</li>
<li>By rule (b): 39 + S(25) = S(39 + 25)</li>
<li>Since 39 + 25 = 64 (established arithmetic fact)</li>
<li>So S(39 + 25) = S(64)</li>
<li>And S(64) = 65</li>
</ol>

<p><strong>Therefore: 39 + 26 = 65. ∎</strong></p>


<h3>768. 39 + 27 = 66</h3>

<ol>
<li>27 = S(26), so 39 + 27 = 39 + S(26)</li>
<li>By rule (b): 39 + S(26) = S(39 + 26)</li>
<li>Since 39 + 26 = 65 (established arithmetic fact)</li>
<li>So S(39 + 26) = S(65)</li>
<li>And S(65) = 66</li>
</ol>

<p><strong>Therefore: 39 + 27 = 66. ∎</strong></p>


<h3>769. 39 + 28 = 67</h3>

<ol>
<li>28 = S(27), so 39 + 28 = 39 + S(27)</li>
<li>By rule (b): 39 + S(27) = S(39 + 27)</li>
<li>Since 39 + 27 = 66 (established arithmetic fact)</li>
<li>So S(39 + 27) = S(66)</li>
<li>And S(66) = 67</li>
</ol>

<p><strong>Therefore: 39 + 28 = 67. ∎</strong></p>


<h3>770. 39 + 29 = 68</h3>

<ol>
<li>29 = S(28), so 39 + 29 = 39 + S(28)</li>
<li>By rule (b): 39 + S(28) = S(39 + 28)</li>
<li>Since 39 + 28 = 67 (established arithmetic fact)</li>
<li>So S(39 + 28) = S(67)</li>
<li>And S(67) = 68</li>
</ol>

<p><strong>Therefore: 39 + 29 = 68. ∎</strong></p>


<h3>771. 39 + 30 = 69</h3>

<ol>
<li>30 = S(29), so 39 + 30 = 39 + S(29)</li>
<li>By rule (b): 39 + S(29) = S(39 + 29)</li>
<li>Since 39 + 29 = 68 (established arithmetic fact)</li>
<li>So S(39 + 29) = S(68)</li>
<li>And S(68) = 69</li>
</ol>

<p><strong>Therefore: 39 + 30 = 69. ∎</strong></p>


<h3>772. 39 + 31 = 70</h3>

<ol>
<li>31 = S(30), so 39 + 31 = 39 + S(30)</li>
<li>By rule (b): 39 + S(30) = S(39 + 30)</li>
<li>Since 39 + 30 = 69 (established arithmetic fact)</li>
<li>So S(39 + 30) = S(69)</li>
<li>And S(69) = 70</li>
</ol>

<p><strong>Therefore: 39 + 31 = 70. ∎</strong></p>


<h3>773. 39 + 32 = 71</h3>

<ol>
<li>32 = S(31), so 39 + 32 = 39 + S(31)</li>
<li>By rule (b): 39 + S(31) = S(39 + 31)</li>
<li>Since 39 + 31 = 70 (established arithmetic fact)</li>
<li>So S(39 + 31) = S(70)</li>
<li>And S(70) = 71</li>
</ol>

<p><strong>Therefore: 39 + 32 = 71. ∎</strong></p>


<h3>774. 39 + 33 = 72</h3>

<ol>
<li>33 = S(32), so 39 + 33 = 39 + S(32)</li>
<li>By rule (b): 39 + S(32) = S(39 + 32)</li>
<li>Since 39 + 32 = 71 (established arithmetic fact)</li>
<li>So S(39 + 32) = S(71)</li>
<li>And S(71) = 72</li>
</ol>

<p><strong>Therefore: 39 + 33 = 72. ∎</strong></p>


<h3>775. 39 + 34 = 73</h3>

<ol>
<li>34 = S(33), so 39 + 34 = 39 + S(33)</li>
<li>By rule (b): 39 + S(33) = S(39 + 33)</li>
<li>Since 39 + 33 = 72 (established arithmetic fact)</li>
<li>So S(39 + 33) = S(72)</li>
<li>And S(72) = 73</li>
</ol>

<p><strong>Therefore: 39 + 34 = 73. ∎</strong></p>


<h3>776. 39 + 35 = 74</h3>

<ol>
<li>35 = S(34), so 39 + 35 = 39 + S(34)</li>
<li>By rule (b): 39 + S(34) = S(39 + 34)</li>
<li>Since 39 + 34 = 73 (established arithmetic fact)</li>
<li>So S(39 + 34) = S(73)</li>
<li>And S(73) = 74</li>
</ol>

<p><strong>Therefore: 39 + 35 = 74. ∎</strong></p>


<h3>777. 39 + 36 = 75</h3>

<ol>
<li>36 = S(35), so 39 + 36 = 39 + S(35)</li>
<li>By rule (b): 39 + S(35) = S(39 + 35)</li>
<li>Since 39 + 35 = 74 (established arithmetic fact)</li>
<li>So S(39 + 35) = S(74)</li>
<li>And S(74) = 75</li>
</ol>

<p><strong>Therefore: 39 + 36 = 75. ∎</strong></p>


<h3>778. 39 + 37 = 76</h3>

<ol>
<li>37 = S(36), so 39 + 37 = 39 + S(36)</li>
<li>By rule (b): 39 + S(36) = S(39 + 36)</li>
<li>Since 39 + 36 = 75 (established arithmetic fact)</li>
<li>So S(39 + 36) = S(75)</li>
<li>And S(75) = 76</li>
</ol>

<p><strong>Therefore: 39 + 37 = 76. ∎</strong></p>


<h3>779. 39 + 38 = 77</h3>

<ol>
<li>38 = S(37), so 39 + 38 = 39 + S(37)</li>
<li>By rule (b): 39 + S(37) = S(39 + 37)</li>
<li>Since 39 + 37 = 76 (established arithmetic fact)</li>
<li>So S(39 + 37) = S(76)</li>
<li>And S(76) = 77</li>
</ol>

<p><strong>Therefore: 39 + 38 = 77. ∎</strong></p>


<h3>780. 39 + 39 = 78</h3>

<ol>
<li>39 = S(38), so 39 + 39 = 39 + S(38)</li>
<li>By rule (b): 39 + S(38) = S(39 + 38)</li>
<li>Since 39 + 38 = 77 (established arithmetic fact)</li>
<li>So S(39 + 38) = S(77)</li>
<li>And S(77) = 78</li>
</ol>

<p><strong>Therefore: 39 + 39 = 78. ∎</strong></p>


<h3>781. 40 + 1 = 41</h3>

<ol>
<li>1 = S(0), so 40 + 1 = 40 + S(0)</li>
<li>By rule (b): 40 + S(0) = S(40 + 0)</li>
<li>Since 40 + 0 = 40 (established arithmetic fact)</li>
<li>So S(40 + 0) = S(40)</li>
<li>And S(40) = 41</li>
</ol>

<p><strong>Therefore: 40 + 1 = 41. ∎</strong></p>


<h3>782. 40 + 2 = 42</h3>

<ol>
<li>2 = S(1), so 40 + 2 = 40 + S(1)</li>
<li>By rule (b): 40 + S(1) = S(40 + 1)</li>
<li>Since 40 + 1 = 41 (established arithmetic fact)</li>
<li>So S(40 + 1) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 40 + 2 = 42. ∎</strong></p>


<h3>783. 40 + 3 = 43</h3>

<ol>
<li>3 = S(2), so 40 + 3 = 40 + S(2)</li>
<li>By rule (b): 40 + S(2) = S(40 + 2)</li>
<li>Since 40 + 2 = 42 (established arithmetic fact)</li>
<li>So S(40 + 2) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 40 + 3 = 43. ∎</strong></p>


<h3>784. 40 + 4 = 44</h3>

<ol>
<li>4 = S(3), so 40 + 4 = 40 + S(3)</li>
<li>By rule (b): 40 + S(3) = S(40 + 3)</li>
<li>Since 40 + 3 = 43 (established arithmetic fact)</li>
<li>So S(40 + 3) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 40 + 4 = 44. ∎</strong></p>


<h3>785. 40 + 5 = 45</h3>

<ol>
<li>5 = S(4), so 40 + 5 = 40 + S(4)</li>
<li>By rule (b): 40 + S(4) = S(40 + 4)</li>
<li>Since 40 + 4 = 44 (established arithmetic fact)</li>
<li>So S(40 + 4) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 40 + 5 = 45. ∎</strong></p>


<h3>786. 40 + 6 = 46</h3>

<ol>
<li>6 = S(5), so 40 + 6 = 40 + S(5)</li>
<li>By rule (b): 40 + S(5) = S(40 + 5)</li>
<li>Since 40 + 5 = 45 (established arithmetic fact)</li>
<li>So S(40 + 5) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 40 + 6 = 46. ∎</strong></p>


<h3>787. 40 + 7 = 47</h3>

<ol>
<li>7 = S(6), so 40 + 7 = 40 + S(6)</li>
<li>By rule (b): 40 + S(6) = S(40 + 6)</li>
<li>Since 40 + 6 = 46 (established arithmetic fact)</li>
<li>So S(40 + 6) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 40 + 7 = 47. ∎</strong></p>


<h3>788. 40 + 8 = 48</h3>

<ol>
<li>8 = S(7), so 40 + 8 = 40 + S(7)</li>
<li>By rule (b): 40 + S(7) = S(40 + 7)</li>
<li>Since 40 + 7 = 47 (established arithmetic fact)</li>
<li>So S(40 + 7) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 40 + 8 = 48. ∎</strong></p>


<h3>789. 40 + 9 = 49</h3>

<ol>
<li>9 = S(8), so 40 + 9 = 40 + S(8)</li>
<li>By rule (b): 40 + S(8) = S(40 + 8)</li>
<li>Since 40 + 8 = 48 (established arithmetic fact)</li>
<li>So S(40 + 8) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 40 + 9 = 49. ∎</strong></p>


<h3>790. 40 + 10 = 50</h3>

<ol>
<li>10 = S(9), so 40 + 10 = 40 + S(9)</li>
<li>By rule (b): 40 + S(9) = S(40 + 9)</li>
<li>Since 40 + 9 = 49 (established arithmetic fact)</li>
<li>So S(40 + 9) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 40 + 10 = 50. ∎</strong></p>


<h3>791. 40 + 11 = 51</h3>

<ol>
<li>11 = S(10), so 40 + 11 = 40 + S(10)</li>
<li>By rule (b): 40 + S(10) = S(40 + 10)</li>
<li>Since 40 + 10 = 50 (established arithmetic fact)</li>
<li>So S(40 + 10) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 40 + 11 = 51. ∎</strong></p>


<h3>792. 40 + 12 = 52</h3>

<ol>
<li>12 = S(11), so 40 + 12 = 40 + S(11)</li>
<li>By rule (b): 40 + S(11) = S(40 + 11)</li>
<li>Since 40 + 11 = 51 (established arithmetic fact)</li>
<li>So S(40 + 11) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 40 + 12 = 52. ∎</strong></p>


<h3>793. 40 + 13 = 53</h3>

<ol>
<li>13 = S(12), so 40 + 13 = 40 + S(12)</li>
<li>By rule (b): 40 + S(12) = S(40 + 12)</li>
<li>Since 40 + 12 = 52 (established arithmetic fact)</li>
<li>So S(40 + 12) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 40 + 13 = 53. ∎</strong></p>


<h3>794. 40 + 14 = 54</h3>

<ol>
<li>14 = S(13), so 40 + 14 = 40 + S(13)</li>
<li>By rule (b): 40 + S(13) = S(40 + 13)</li>
<li>Since 40 + 13 = 53 (established arithmetic fact)</li>
<li>So S(40 + 13) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 40 + 14 = 54. ∎</strong></p>


<h3>795. 40 + 15 = 55</h3>

<ol>
<li>15 = S(14), so 40 + 15 = 40 + S(14)</li>
<li>By rule (b): 40 + S(14) = S(40 + 14)</li>
<li>Since 40 + 14 = 54 (established arithmetic fact)</li>
<li>So S(40 + 14) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 40 + 15 = 55. ∎</strong></p>


<h3>796. 40 + 16 = 56</h3>

<ol>
<li>16 = S(15), so 40 + 16 = 40 + S(15)</li>
<li>By rule (b): 40 + S(15) = S(40 + 15)</li>
<li>Since 40 + 15 = 55 (established arithmetic fact)</li>
<li>So S(40 + 15) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 40 + 16 = 56. ∎</strong></p>


<h3>797. 40 + 17 = 57</h3>

<ol>
<li>17 = S(16), so 40 + 17 = 40 + S(16)</li>
<li>By rule (b): 40 + S(16) = S(40 + 16)</li>
<li>Since 40 + 16 = 56 (established arithmetic fact)</li>
<li>So S(40 + 16) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 40 + 17 = 57. ∎</strong></p>


<h3>798. 40 + 18 = 58</h3>

<ol>
<li>18 = S(17), so 40 + 18 = 40 + S(17)</li>
<li>By rule (b): 40 + S(17) = S(40 + 17)</li>
<li>Since 40 + 17 = 57 (established arithmetic fact)</li>
<li>So S(40 + 17) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 40 + 18 = 58. ∎</strong></p>


<h3>799. 40 + 19 = 59</h3>

<ol>
<li>19 = S(18), so 40 + 19 = 40 + S(18)</li>
<li>By rule (b): 40 + S(18) = S(40 + 18)</li>
<li>Since 40 + 18 = 58 (established arithmetic fact)</li>
<li>So S(40 + 18) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 40 + 19 = 59. ∎</strong></p>


<h3>800. 40 + 20 = 60</h3>

<ol>
<li>20 = S(19), so 40 + 20 = 40 + S(19)</li>
<li>By rule (b): 40 + S(19) = S(40 + 19)</li>
<li>Since 40 + 19 = 59 (established arithmetic fact)</li>
<li>So S(40 + 19) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 40 + 20 = 60. ∎</strong></p>


<h3>801. 40 + 21 = 61</h3>

<ol>
<li>21 = S(20), so 40 + 21 = 40 + S(20)</li>
<li>By rule (b): 40 + S(20) = S(40 + 20)</li>
<li>Since 40 + 20 = 60 (established arithmetic fact)</li>
<li>So S(40 + 20) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 40 + 21 = 61. ∎</strong></p>


<h3>802. 40 + 22 = 62</h3>

<ol>
<li>22 = S(21), so 40 + 22 = 40 + S(21)</li>
<li>By rule (b): 40 + S(21) = S(40 + 21)</li>
<li>Since 40 + 21 = 61 (established arithmetic fact)</li>
<li>So S(40 + 21) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 40 + 22 = 62. ∎</strong></p>


<h3>803. 40 + 23 = 63</h3>

<ol>
<li>23 = S(22), so 40 + 23 = 40 + S(22)</li>
<li>By rule (b): 40 + S(22) = S(40 + 22)</li>
<li>Since 40 + 22 = 62 (established arithmetic fact)</li>
<li>So S(40 + 22) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 40 + 23 = 63. ∎</strong></p>


<h3>804. 40 + 24 = 64</h3>

<ol>
<li>24 = S(23), so 40 + 24 = 40 + S(23)</li>
<li>By rule (b): 40 + S(23) = S(40 + 23)</li>
<li>Since 40 + 23 = 63 (established arithmetic fact)</li>
<li>So S(40 + 23) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 40 + 24 = 64. ∎</strong></p>


<h3>805. 40 + 25 = 65</h3>

<ol>
<li>25 = S(24), so 40 + 25 = 40 + S(24)</li>
<li>By rule (b): 40 + S(24) = S(40 + 24)</li>
<li>Since 40 + 24 = 64 (established arithmetic fact)</li>
<li>So S(40 + 24) = S(64)</li>
<li>And S(64) = 65</li>
</ol>

<p><strong>Therefore: 40 + 25 = 65. ∎</strong></p>


<h3>806. 40 + 26 = 66</h3>

<ol>
<li>26 = S(25), so 40 + 26 = 40 + S(25)</li>
<li>By rule (b): 40 + S(25) = S(40 + 25)</li>
<li>Since 40 + 25 = 65 (established arithmetic fact)</li>
<li>So S(40 + 25) = S(65)</li>
<li>And S(65) = 66</li>
</ol>

<p><strong>Therefore: 40 + 26 = 66. ∎</strong></p>


<h3>807. 40 + 27 = 67</h3>

<ol>
<li>27 = S(26), so 40 + 27 = 40 + S(26)</li>
<li>By rule (b): 40 + S(26) = S(40 + 26)</li>
<li>Since 40 + 26 = 66 (established arithmetic fact)</li>
<li>So S(40 + 26) = S(66)</li>
<li>And S(66) = 67</li>
</ol>

<p><strong>Therefore: 40 + 27 = 67. ∎</strong></p>


<h3>808. 40 + 28 = 68</h3>

<ol>
<li>28 = S(27), so 40 + 28 = 40 + S(27)</li>
<li>By rule (b): 40 + S(27) = S(40 + 27)</li>
<li>Since 40 + 27 = 67 (established arithmetic fact)</li>
<li>So S(40 + 27) = S(67)</li>
<li>And S(67) = 68</li>
</ol>

<p><strong>Therefore: 40 + 28 = 68. ∎</strong></p>


<h3>809. 40 + 29 = 69</h3>

<ol>
<li>29 = S(28), so 40 + 29 = 40 + S(28)</li>
<li>By rule (b): 40 + S(28) = S(40 + 28)</li>
<li>Since 40 + 28 = 68 (established arithmetic fact)</li>
<li>So S(40 + 28) = S(68)</li>
<li>And S(68) = 69</li>
</ol>

<p><strong>Therefore: 40 + 29 = 69. ∎</strong></p>


<h3>810. 40 + 30 = 70</h3>

<ol>
<li>30 = S(29), so 40 + 30 = 40 + S(29)</li>
<li>By rule (b): 40 + S(29) = S(40 + 29)</li>
<li>Since 40 + 29 = 69 (established arithmetic fact)</li>
<li>So S(40 + 29) = S(69)</li>
<li>And S(69) = 70</li>
</ol>

<p><strong>Therefore: 40 + 30 = 70. ∎</strong></p>


<h3>811. 40 + 31 = 71</h3>

<ol>
<li>31 = S(30), so 40 + 31 = 40 + S(30)</li>
<li>By rule (b): 40 + S(30) = S(40 + 30)</li>
<li>Since 40 + 30 = 70 (established arithmetic fact)</li>
<li>So S(40 + 30) = S(70)</li>
<li>And S(70) = 71</li>
</ol>

<p><strong>Therefore: 40 + 31 = 71. ∎</strong></p>


<h3>812. 40 + 32 = 72</h3>

<ol>
<li>32 = S(31), so 40 + 32 = 40 + S(31)</li>
<li>By rule (b): 40 + S(31) = S(40 + 31)</li>
<li>Since 40 + 31 = 71 (established arithmetic fact)</li>
<li>So S(40 + 31) = S(71)</li>
<li>And S(71) = 72</li>
</ol>

<p><strong>Therefore: 40 + 32 = 72. ∎</strong></p>


<h3>813. 40 + 33 = 73</h3>

<ol>
<li>33 = S(32), so 40 + 33 = 40 + S(32)</li>
<li>By rule (b): 40 + S(32) = S(40 + 32)</li>
<li>Since 40 + 32 = 72 (established arithmetic fact)</li>
<li>So S(40 + 32) = S(72)</li>
<li>And S(72) = 73</li>
</ol>

<p><strong>Therefore: 40 + 33 = 73. ∎</strong></p>


<h3>814. 40 + 34 = 74</h3>

<ol>
<li>34 = S(33), so 40 + 34 = 40 + S(33)</li>
<li>By rule (b): 40 + S(33) = S(40 + 33)</li>
<li>Since 40 + 33 = 73 (established arithmetic fact)</li>
<li>So S(40 + 33) = S(73)</li>
<li>And S(73) = 74</li>
</ol>

<p><strong>Therefore: 40 + 34 = 74. ∎</strong></p>


<h3>815. 40 + 35 = 75</h3>

<ol>
<li>35 = S(34), so 40 + 35 = 40 + S(34)</li>
<li>By rule (b): 40 + S(34) = S(40 + 34)</li>
<li>Since 40 + 34 = 74 (established arithmetic fact)</li>
<li>So S(40 + 34) = S(74)</li>
<li>And S(74) = 75</li>
</ol>

<p><strong>Therefore: 40 + 35 = 75. ∎</strong></p>


<h3>816. 40 + 36 = 76</h3>

<ol>
<li>36 = S(35), so 40 + 36 = 40 + S(35)</li>
<li>By rule (b): 40 + S(35) = S(40 + 35)</li>
<li>Since 40 + 35 = 75 (established arithmetic fact)</li>
<li>So S(40 + 35) = S(75)</li>
<li>And S(75) = 76</li>
</ol>

<p><strong>Therefore: 40 + 36 = 76. ∎</strong></p>


<h3>817. 40 + 37 = 77</h3>

<ol>
<li>37 = S(36), so 40 + 37 = 40 + S(36)</li>
<li>By rule (b): 40 + S(36) = S(40 + 36)</li>
<li>Since 40 + 36 = 76 (established arithmetic fact)</li>
<li>So S(40 + 36) = S(76)</li>
<li>And S(76) = 77</li>
</ol>

<p><strong>Therefore: 40 + 37 = 77. ∎</strong></p>


<h3>818. 40 + 38 = 78</h3>

<ol>
<li>38 = S(37), so 40 + 38 = 40 + S(37)</li>
<li>By rule (b): 40 + S(37) = S(40 + 37)</li>
<li>Since 40 + 37 = 77 (established arithmetic fact)</li>
<li>So S(40 + 37) = S(77)</li>
<li>And S(77) = 78</li>
</ol>

<p><strong>Therefore: 40 + 38 = 78. ∎</strong></p>


<h3>819. 40 + 39 = 79</h3>

<ol>
<li>39 = S(38), so 40 + 39 = 40 + S(38)</li>
<li>By rule (b): 40 + S(38) = S(40 + 38)</li>
<li>Since 40 + 38 = 78 (established arithmetic fact)</li>
<li>So S(40 + 38) = S(78)</li>
<li>And S(78) = 79</li>
</ol>

<p><strong>Therefore: 40 + 39 = 79. ∎</strong></p>


<h3>820. 40 + 40 = 80</h3>

<ol>
<li>40 = S(39), so 40 + 40 = 40 + S(39)</li>
<li>By rule (b): 40 + S(39) = S(40 + 39)</li>
<li>Since 40 + 39 = 79 (established arithmetic fact)</li>
<li>So S(40 + 39) = S(79)</li>
<li>And S(79) = 80</li>
</ol>

<p><strong>Therefore: 40 + 40 = 80. ∎</strong></p>


<h3>821. 41 + 1 = 42</h3>

<ol>
<li>1 = S(0), so 41 + 1 = 41 + S(0)</li>
<li>By rule (b): 41 + S(0) = S(41 + 0)</li>
<li>Since 41 + 0 = 41 (established arithmetic fact)</li>
<li>So S(41 + 0) = S(41)</li>
<li>And S(41) = 42</li>
</ol>

<p><strong>Therefore: 41 + 1 = 42. ∎</strong></p>


<h3>822. 41 + 2 = 43</h3>

<ol>
<li>2 = S(1), so 41 + 2 = 41 + S(1)</li>
<li>By rule (b): 41 + S(1) = S(41 + 1)</li>
<li>Since 41 + 1 = 42 (established arithmetic fact)</li>
<li>So S(41 + 1) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 41 + 2 = 43. ∎</strong></p>


<h3>823. 41 + 3 = 44</h3>

<ol>
<li>3 = S(2), so 41 + 3 = 41 + S(2)</li>
<li>By rule (b): 41 + S(2) = S(41 + 2)</li>
<li>Since 41 + 2 = 43 (established arithmetic fact)</li>
<li>So S(41 + 2) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 41 + 3 = 44. ∎</strong></p>


<h3>824. 41 + 4 = 45</h3>

<ol>
<li>4 = S(3), so 41 + 4 = 41 + S(3)</li>
<li>By rule (b): 41 + S(3) = S(41 + 3)</li>
<li>Since 41 + 3 = 44 (established arithmetic fact)</li>
<li>So S(41 + 3) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 41 + 4 = 45. ∎</strong></p>


<h3>825. 41 + 5 = 46</h3>

<ol>
<li>5 = S(4), so 41 + 5 = 41 + S(4)</li>
<li>By rule (b): 41 + S(4) = S(41 + 4)</li>
<li>Since 41 + 4 = 45 (established arithmetic fact)</li>
<li>So S(41 + 4) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 41 + 5 = 46. ∎</strong></p>


<h3>826. 41 + 6 = 47</h3>

<ol>
<li>6 = S(5), so 41 + 6 = 41 + S(5)</li>
<li>By rule (b): 41 + S(5) = S(41 + 5)</li>
<li>Since 41 + 5 = 46 (established arithmetic fact)</li>
<li>So S(41 + 5) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 41 + 6 = 47. ∎</strong></p>


<h3>827. 41 + 7 = 48</h3>

<ol>
<li>7 = S(6), so 41 + 7 = 41 + S(6)</li>
<li>By rule (b): 41 + S(6) = S(41 + 6)</li>
<li>Since 41 + 6 = 47 (established arithmetic fact)</li>
<li>So S(41 + 6) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 41 + 7 = 48. ∎</strong></p>


<h3>828. 41 + 8 = 49</h3>

<ol>
<li>8 = S(7), so 41 + 8 = 41 + S(7)</li>
<li>By rule (b): 41 + S(7) = S(41 + 7)</li>
<li>Since 41 + 7 = 48 (established arithmetic fact)</li>
<li>So S(41 + 7) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 41 + 8 = 49. ∎</strong></p>


<h3>829. 41 + 9 = 50</h3>

<ol>
<li>9 = S(8), so 41 + 9 = 41 + S(8)</li>
<li>By rule (b): 41 + S(8) = S(41 + 8)</li>
<li>Since 41 + 8 = 49 (established arithmetic fact)</li>
<li>So S(41 + 8) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 41 + 9 = 50. ∎</strong></p>


<h3>830. 41 + 10 = 51</h3>

<ol>
<li>10 = S(9), so 41 + 10 = 41 + S(9)</li>
<li>By rule (b): 41 + S(9) = S(41 + 9)</li>
<li>Since 41 + 9 = 50 (established arithmetic fact)</li>
<li>So S(41 + 9) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 41 + 10 = 51. ∎</strong></p>


<h3>831. 41 + 11 = 52</h3>

<ol>
<li>11 = S(10), so 41 + 11 = 41 + S(10)</li>
<li>By rule (b): 41 + S(10) = S(41 + 10)</li>
<li>Since 41 + 10 = 51 (established arithmetic fact)</li>
<li>So S(41 + 10) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 41 + 11 = 52. ∎</strong></p>


<h3>832. 41 + 12 = 53</h3>

<ol>
<li>12 = S(11), so 41 + 12 = 41 + S(11)</li>
<li>By rule (b): 41 + S(11) = S(41 + 11)</li>
<li>Since 41 + 11 = 52 (established arithmetic fact)</li>
<li>So S(41 + 11) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 41 + 12 = 53. ∎</strong></p>


<h3>833. 41 + 13 = 54</h3>

<ol>
<li>13 = S(12), so 41 + 13 = 41 + S(12)</li>
<li>By rule (b): 41 + S(12) = S(41 + 12)</li>
<li>Since 41 + 12 = 53 (established arithmetic fact)</li>
<li>So S(41 + 12) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 41 + 13 = 54. ∎</strong></p>


<h3>834. 41 + 14 = 55</h3>

<ol>
<li>14 = S(13), so 41 + 14 = 41 + S(13)</li>
<li>By rule (b): 41 + S(13) = S(41 + 13)</li>
<li>Since 41 + 13 = 54 (established arithmetic fact)</li>
<li>So S(41 + 13) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 41 + 14 = 55. ∎</strong></p>


<h3>835. 41 + 15 = 56</h3>

<ol>
<li>15 = S(14), so 41 + 15 = 41 + S(14)</li>
<li>By rule (b): 41 + S(14) = S(41 + 14)</li>
<li>Since 41 + 14 = 55 (established arithmetic fact)</li>
<li>So S(41 + 14) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 41 + 15 = 56. ∎</strong></p>


<h3>836. 41 + 16 = 57</h3>

<ol>
<li>16 = S(15), so 41 + 16 = 41 + S(15)</li>
<li>By rule (b): 41 + S(15) = S(41 + 15)</li>
<li>Since 41 + 15 = 56 (established arithmetic fact)</li>
<li>So S(41 + 15) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 41 + 16 = 57. ∎</strong></p>


<h3>837. 41 + 17 = 58</h3>

<ol>
<li>17 = S(16), so 41 + 17 = 41 + S(16)</li>
<li>By rule (b): 41 + S(16) = S(41 + 16)</li>
<li>Since 41 + 16 = 57 (established arithmetic fact)</li>
<li>So S(41 + 16) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 41 + 17 = 58. ∎</strong></p>


<h3>838. 41 + 18 = 59</h3>

<ol>
<li>18 = S(17), so 41 + 18 = 41 + S(17)</li>
<li>By rule (b): 41 + S(17) = S(41 + 17)</li>
<li>Since 41 + 17 = 58 (established arithmetic fact)</li>
<li>So S(41 + 17) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 41 + 18 = 59. ∎</strong></p>


<h3>839. 41 + 19 = 60</h3>

<ol>
<li>19 = S(18), so 41 + 19 = 41 + S(18)</li>
<li>By rule (b): 41 + S(18) = S(41 + 18)</li>
<li>Since 41 + 18 = 59 (established arithmetic fact)</li>
<li>So S(41 + 18) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 41 + 19 = 60. ∎</strong></p>


<h3>840. 41 + 20 = 61</h3>

<ol>
<li>20 = S(19), so 41 + 20 = 41 + S(19)</li>
<li>By rule (b): 41 + S(19) = S(41 + 19)</li>
<li>Since 41 + 19 = 60 (established arithmetic fact)</li>
<li>So S(41 + 19) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 41 + 20 = 61. ∎</strong></p>


<h3>841. 41 + 21 = 62</h3>

<ol>
<li>21 = S(20), so 41 + 21 = 41 + S(20)</li>
<li>By rule (b): 41 + S(20) = S(41 + 20)</li>
<li>Since 41 + 20 = 61 (established arithmetic fact)</li>
<li>So S(41 + 20) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 41 + 21 = 62. ∎</strong></p>


<h3>842. 41 + 22 = 63</h3>

<ol>
<li>22 = S(21), so 41 + 22 = 41 + S(21)</li>
<li>By rule (b): 41 + S(21) = S(41 + 21)</li>
<li>Since 41 + 21 = 62 (established arithmetic fact)</li>
<li>So S(41 + 21) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 41 + 22 = 63. ∎</strong></p>


<h3>843. 41 + 23 = 64</h3>

<ol>
<li>23 = S(22), so 41 + 23 = 41 + S(22)</li>
<li>By rule (b): 41 + S(22) = S(41 + 22)</li>
<li>Since 41 + 22 = 63 (established arithmetic fact)</li>
<li>So S(41 + 22) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 41 + 23 = 64. ∎</strong></p>


<h3>844. 41 + 24 = 65</h3>

<ol>
<li>24 = S(23), so 41 + 24 = 41 + S(23)</li>
<li>By rule (b): 41 + S(23) = S(41 + 23)</li>
<li>Since 41 + 23 = 64 (established arithmetic fact)</li>
<li>So S(41 + 23) = S(64)</li>
<li>And S(64) = 65</li>
</ol>

<p><strong>Therefore: 41 + 24 = 65. ∎</strong></p>


<h3>845. 41 + 25 = 66</h3>

<ol>
<li>25 = S(24), so 41 + 25 = 41 + S(24)</li>
<li>By rule (b): 41 + S(24) = S(41 + 24)</li>
<li>Since 41 + 24 = 65 (established arithmetic fact)</li>
<li>So S(41 + 24) = S(65)</li>
<li>And S(65) = 66</li>
</ol>

<p><strong>Therefore: 41 + 25 = 66. ∎</strong></p>


<h3>846. 41 + 26 = 67</h3>

<ol>
<li>26 = S(25), so 41 + 26 = 41 + S(25)</li>
<li>By rule (b): 41 + S(25) = S(41 + 25)</li>
<li>Since 41 + 25 = 66 (established arithmetic fact)</li>
<li>So S(41 + 25) = S(66)</li>
<li>And S(66) = 67</li>
</ol>

<p><strong>Therefore: 41 + 26 = 67. ∎</strong></p>


<h3>847. 41 + 27 = 68</h3>

<ol>
<li>27 = S(26), so 41 + 27 = 41 + S(26)</li>
<li>By rule (b): 41 + S(26) = S(41 + 26)</li>
<li>Since 41 + 26 = 67 (established arithmetic fact)</li>
<li>So S(41 + 26) = S(67)</li>
<li>And S(67) = 68</li>
</ol>

<p><strong>Therefore: 41 + 27 = 68. ∎</strong></p>


<h3>848. 41 + 28 = 69</h3>

<ol>
<li>28 = S(27), so 41 + 28 = 41 + S(27)</li>
<li>By rule (b): 41 + S(27) = S(41 + 27)</li>
<li>Since 41 + 27 = 68 (established arithmetic fact)</li>
<li>So S(41 + 27) = S(68)</li>
<li>And S(68) = 69</li>
</ol>

<p><strong>Therefore: 41 + 28 = 69. ∎</strong></p>


<h3>849. 41 + 29 = 70</h3>

<ol>
<li>29 = S(28), so 41 + 29 = 41 + S(28)</li>
<li>By rule (b): 41 + S(28) = S(41 + 28)</li>
<li>Since 41 + 28 = 69 (established arithmetic fact)</li>
<li>So S(41 + 28) = S(69)</li>
<li>And S(69) = 70</li>
</ol>

<p><strong>Therefore: 41 + 29 = 70. ∎</strong></p>


<h3>850. 41 + 30 = 71</h3>

<ol>
<li>30 = S(29), so 41 + 30 = 41 + S(29)</li>
<li>By rule (b): 41 + S(29) = S(41 + 29)</li>
<li>Since 41 + 29 = 70 (established arithmetic fact)</li>
<li>So S(41 + 29) = S(70)</li>
<li>And S(70) = 71</li>
</ol>

<p><strong>Therefore: 41 + 30 = 71. ∎</strong></p>


<h3>851. 41 + 31 = 72</h3>

<ol>
<li>31 = S(30), so 41 + 31 = 41 + S(30)</li>
<li>By rule (b): 41 + S(30) = S(41 + 30)</li>
<li>Since 41 + 30 = 71 (established arithmetic fact)</li>
<li>So S(41 + 30) = S(71)</li>
<li>And S(71) = 72</li>
</ol>

<p><strong>Therefore: 41 + 31 = 72. ∎</strong></p>


<h3>852. 41 + 32 = 73</h3>

<ol>
<li>32 = S(31), so 41 + 32 = 41 + S(31)</li>
<li>By rule (b): 41 + S(31) = S(41 + 31)</li>
<li>Since 41 + 31 = 72 (established arithmetic fact)</li>
<li>So S(41 + 31) = S(72)</li>
<li>And S(72) = 73</li>
</ol>

<p><strong>Therefore: 41 + 32 = 73. ∎</strong></p>


<h3>853. 41 + 33 = 74</h3>

<ol>
<li>33 = S(32), so 41 + 33 = 41 + S(32)</li>
<li>By rule (b): 41 + S(32) = S(41 + 32)</li>
<li>Since 41 + 32 = 73 (established arithmetic fact)</li>
<li>So S(41 + 32) = S(73)</li>
<li>And S(73) = 74</li>
</ol>

<p><strong>Therefore: 41 + 33 = 74. ∎</strong></p>


<h3>854. 41 + 34 = 75</h3>

<ol>
<li>34 = S(33), so 41 + 34 = 41 + S(33)</li>
<li>By rule (b): 41 + S(33) = S(41 + 33)</li>
<li>Since 41 + 33 = 74 (established arithmetic fact)</li>
<li>So S(41 + 33) = S(74)</li>
<li>And S(74) = 75</li>
</ol>

<p><strong>Therefore: 41 + 34 = 75. ∎</strong></p>


<h3>855. 41 + 35 = 76</h3>

<ol>
<li>35 = S(34), so 41 + 35 = 41 + S(34)</li>
<li>By rule (b): 41 + S(34) = S(41 + 34)</li>
<li>Since 41 + 34 = 75 (established arithmetic fact)</li>
<li>So S(41 + 34) = S(75)</li>
<li>And S(75) = 76</li>
</ol>

<p><strong>Therefore: 41 + 35 = 76. ∎</strong></p>


<h3>856. 41 + 36 = 77</h3>

<ol>
<li>36 = S(35), so 41 + 36 = 41 + S(35)</li>
<li>By rule (b): 41 + S(35) = S(41 + 35)</li>
<li>Since 41 + 35 = 76 (established arithmetic fact)</li>
<li>So S(41 + 35) = S(76)</li>
<li>And S(76) = 77</li>
</ol>

<p><strong>Therefore: 41 + 36 = 77. ∎</strong></p>


<h3>857. 41 + 37 = 78</h3>

<ol>
<li>37 = S(36), so 41 + 37 = 41 + S(36)</li>
<li>By rule (b): 41 + S(36) = S(41 + 36)</li>
<li>Since 41 + 36 = 77 (established arithmetic fact)</li>
<li>So S(41 + 36) = S(77)</li>
<li>And S(77) = 78</li>
</ol>

<p><strong>Therefore: 41 + 37 = 78. ∎</strong></p>


<h3>858. 41 + 38 = 79</h3>

<ol>
<li>38 = S(37), so 41 + 38 = 41 + S(37)</li>
<li>By rule (b): 41 + S(37) = S(41 + 37)</li>
<li>Since 41 + 37 = 78 (established arithmetic fact)</li>
<li>So S(41 + 37) = S(78)</li>
<li>And S(78) = 79</li>
</ol>

<p><strong>Therefore: 41 + 38 = 79. ∎</strong></p>


<h3>859. 41 + 39 = 80</h3>

<ol>
<li>39 = S(38), so 41 + 39 = 41 + S(38)</li>
<li>By rule (b): 41 + S(38) = S(41 + 38)</li>
<li>Since 41 + 38 = 79 (established arithmetic fact)</li>
<li>So S(41 + 38) = S(79)</li>
<li>And S(79) = 80</li>
</ol>

<p><strong>Therefore: 41 + 39 = 80. ∎</strong></p>


<h3>860. 41 + 40 = 81</h3>

<ol>
<li>40 = S(39), so 41 + 40 = 41 + S(39)</li>
<li>By rule (b): 41 + S(39) = S(41 + 39)</li>
<li>Since 41 + 39 = 80 (established arithmetic fact)</li>
<li>So S(41 + 39) = S(80)</li>
<li>And S(80) = 81</li>
</ol>

<p><strong>Therefore: 41 + 40 = 81. ∎</strong></p>


<h3>861. 41 + 41 = 82</h3>

<ol>
<li>41 = S(40), so 41 + 41 = 41 + S(40)</li>
<li>By rule (b): 41 + S(40) = S(41 + 40)</li>
<li>Since 41 + 40 = 81 (established arithmetic fact)</li>
<li>So S(41 + 40) = S(81)</li>
<li>And S(81) = 82</li>
</ol>

<p><strong>Therefore: 41 + 41 = 82. ∎</strong></p>


<h3>862. 42 + 1 = 43</h3>

<ol>
<li>1 = S(0), so 42 + 1 = 42 + S(0)</li>
<li>By rule (b): 42 + S(0) = S(42 + 0)</li>
<li>Since 42 + 0 = 42 (established arithmetic fact)</li>
<li>So S(42 + 0) = S(42)</li>
<li>And S(42) = 43</li>
</ol>

<p><strong>Therefore: 42 + 1 = 43. ∎</strong></p>


<h3>863. 42 + 2 = 44</h3>

<ol>
<li>2 = S(1), so 42 + 2 = 42 + S(1)</li>
<li>By rule (b): 42 + S(1) = S(42 + 1)</li>
<li>Since 42 + 1 = 43 (established arithmetic fact)</li>
<li>So S(42 + 1) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 42 + 2 = 44. ∎</strong></p>


<h3>864. 42 + 3 = 45</h3>

<ol>
<li>3 = S(2), so 42 + 3 = 42 + S(2)</li>
<li>By rule (b): 42 + S(2) = S(42 + 2)</li>
<li>Since 42 + 2 = 44 (established arithmetic fact)</li>
<li>So S(42 + 2) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 42 + 3 = 45. ∎</strong></p>


<h3>865. 42 + 4 = 46</h3>

<ol>
<li>4 = S(3), so 42 + 4 = 42 + S(3)</li>
<li>By rule (b): 42 + S(3) = S(42 + 3)</li>
<li>Since 42 + 3 = 45 (established arithmetic fact)</li>
<li>So S(42 + 3) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 42 + 4 = 46. ∎</strong></p>


<h3>866. 42 + 5 = 47</h3>

<ol>
<li>5 = S(4), so 42 + 5 = 42 + S(4)</li>
<li>By rule (b): 42 + S(4) = S(42 + 4)</li>
<li>Since 42 + 4 = 46 (established arithmetic fact)</li>
<li>So S(42 + 4) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 42 + 5 = 47. ∎</strong></p>


<h3>867. 42 + 6 = 48</h3>

<ol>
<li>6 = S(5), so 42 + 6 = 42 + S(5)</li>
<li>By rule (b): 42 + S(5) = S(42 + 5)</li>
<li>Since 42 + 5 = 47 (established arithmetic fact)</li>
<li>So S(42 + 5) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 42 + 6 = 48. ∎</strong></p>


<h3>868. 42 + 7 = 49</h3>

<ol>
<li>7 = S(6), so 42 + 7 = 42 + S(6)</li>
<li>By rule (b): 42 + S(6) = S(42 + 6)</li>
<li>Since 42 + 6 = 48 (established arithmetic fact)</li>
<li>So S(42 + 6) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 42 + 7 = 49. ∎</strong></p>


<h3>869. 42 + 8 = 50</h3>

<ol>
<li>8 = S(7), so 42 + 8 = 42 + S(7)</li>
<li>By rule (b): 42 + S(7) = S(42 + 7)</li>
<li>Since 42 + 7 = 49 (established arithmetic fact)</li>
<li>So S(42 + 7) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 42 + 8 = 50. ∎</strong></p>


<h3>870. 42 + 9 = 51</h3>

<ol>
<li>9 = S(8), so 42 + 9 = 42 + S(8)</li>
<li>By rule (b): 42 + S(8) = S(42 + 8)</li>
<li>Since 42 + 8 = 50 (established arithmetic fact)</li>
<li>So S(42 + 8) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 42 + 9 = 51. ∎</strong></p>


<h3>871. 42 + 10 = 52</h3>

<ol>
<li>10 = S(9), so 42 + 10 = 42 + S(9)</li>
<li>By rule (b): 42 + S(9) = S(42 + 9)</li>
<li>Since 42 + 9 = 51 (established arithmetic fact)</li>
<li>So S(42 + 9) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 42 + 10 = 52. ∎</strong></p>


<h3>872. 42 + 11 = 53</h3>

<ol>
<li>11 = S(10), so 42 + 11 = 42 + S(10)</li>
<li>By rule (b): 42 + S(10) = S(42 + 10)</li>
<li>Since 42 + 10 = 52 (established arithmetic fact)</li>
<li>So S(42 + 10) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 42 + 11 = 53. ∎</strong></p>


<h3>873. 42 + 12 = 54</h3>

<ol>
<li>12 = S(11), so 42 + 12 = 42 + S(11)</li>
<li>By rule (b): 42 + S(11) = S(42 + 11)</li>
<li>Since 42 + 11 = 53 (established arithmetic fact)</li>
<li>So S(42 + 11) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 42 + 12 = 54. ∎</strong></p>


<h3>874. 42 + 13 = 55</h3>

<ol>
<li>13 = S(12), so 42 + 13 = 42 + S(12)</li>
<li>By rule (b): 42 + S(12) = S(42 + 12)</li>
<li>Since 42 + 12 = 54 (established arithmetic fact)</li>
<li>So S(42 + 12) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 42 + 13 = 55. ∎</strong></p>


<h3>875. 42 + 14 = 56</h3>

<ol>
<li>14 = S(13), so 42 + 14 = 42 + S(13)</li>
<li>By rule (b): 42 + S(13) = S(42 + 13)</li>
<li>Since 42 + 13 = 55 (established arithmetic fact)</li>
<li>So S(42 + 13) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 42 + 14 = 56. ∎</strong></p>


<h3>876. 42 + 15 = 57</h3>

<ol>
<li>15 = S(14), so 42 + 15 = 42 + S(14)</li>
<li>By rule (b): 42 + S(14) = S(42 + 14)</li>
<li>Since 42 + 14 = 56 (established arithmetic fact)</li>
<li>So S(42 + 14) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 42 + 15 = 57. ∎</strong></p>


<h3>877. 42 + 16 = 58</h3>

<ol>
<li>16 = S(15), so 42 + 16 = 42 + S(15)</li>
<li>By rule (b): 42 + S(15) = S(42 + 15)</li>
<li>Since 42 + 15 = 57 (established arithmetic fact)</li>
<li>So S(42 + 15) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 42 + 16 = 58. ∎</strong></p>


<h3>878. 42 + 17 = 59</h3>

<ol>
<li>17 = S(16), so 42 + 17 = 42 + S(16)</li>
<li>By rule (b): 42 + S(16) = S(42 + 16)</li>
<li>Since 42 + 16 = 58 (established arithmetic fact)</li>
<li>So S(42 + 16) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 42 + 17 = 59. ∎</strong></p>


<h3>879. 42 + 18 = 60</h3>

<ol>
<li>18 = S(17), so 42 + 18 = 42 + S(17)</li>
<li>By rule (b): 42 + S(17) = S(42 + 17)</li>
<li>Since 42 + 17 = 59 (established arithmetic fact)</li>
<li>So S(42 + 17) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 42 + 18 = 60. ∎</strong></p>


<h3>880. 42 + 19 = 61</h3>

<ol>
<li>19 = S(18), so 42 + 19 = 42 + S(18)</li>
<li>By rule (b): 42 + S(18) = S(42 + 18)</li>
<li>Since 42 + 18 = 60 (established arithmetic fact)</li>
<li>So S(42 + 18) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 42 + 19 = 61. ∎</strong></p>


<h3>881. 42 + 20 = 62</h3>

<ol>
<li>20 = S(19), so 42 + 20 = 42 + S(19)</li>
<li>By rule (b): 42 + S(19) = S(42 + 19)</li>
<li>Since 42 + 19 = 61 (established arithmetic fact)</li>
<li>So S(42 + 19) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 42 + 20 = 62. ∎</strong></p>


<h3>882. 42 + 21 = 63</h3>

<ol>
<li>21 = S(20), so 42 + 21 = 42 + S(20)</li>
<li>By rule (b): 42 + S(20) = S(42 + 20)</li>
<li>Since 42 + 20 = 62 (established arithmetic fact)</li>
<li>So S(42 + 20) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 42 + 21 = 63. ∎</strong></p>


<h3>883. 42 + 22 = 64</h3>

<ol>
<li>22 = S(21), so 42 + 22 = 42 + S(21)</li>
<li>By rule (b): 42 + S(21) = S(42 + 21)</li>
<li>Since 42 + 21 = 63 (established arithmetic fact)</li>
<li>So S(42 + 21) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 42 + 22 = 64. ∎</strong></p>


<h3>884. 42 + 23 = 65</h3>

<ol>
<li>23 = S(22), so 42 + 23 = 42 + S(22)</li>
<li>By rule (b): 42 + S(22) = S(42 + 22)</li>
<li>Since 42 + 22 = 64 (established arithmetic fact)</li>
<li>So S(42 + 22) = S(64)</li>
<li>And S(64) = 65</li>
</ol>

<p><strong>Therefore: 42 + 23 = 65. ∎</strong></p>


<h3>885. 42 + 24 = 66</h3>

<ol>
<li>24 = S(23), so 42 + 24 = 42 + S(23)</li>
<li>By rule (b): 42 + S(23) = S(42 + 23)</li>
<li>Since 42 + 23 = 65 (established arithmetic fact)</li>
<li>So S(42 + 23) = S(65)</li>
<li>And S(65) = 66</li>
</ol>

<p><strong>Therefore: 42 + 24 = 66. ∎</strong></p>


<h3>886. 42 + 25 = 67</h3>

<ol>
<li>25 = S(24), so 42 + 25 = 42 + S(24)</li>
<li>By rule (b): 42 + S(24) = S(42 + 24)</li>
<li>Since 42 + 24 = 66 (established arithmetic fact)</li>
<li>So S(42 + 24) = S(66)</li>
<li>And S(66) = 67</li>
</ol>

<p><strong>Therefore: 42 + 25 = 67. ∎</strong></p>


<h3>887. 42 + 26 = 68</h3>

<ol>
<li>26 = S(25), so 42 + 26 = 42 + S(25)</li>
<li>By rule (b): 42 + S(25) = S(42 + 25)</li>
<li>Since 42 + 25 = 67 (established arithmetic fact)</li>
<li>So S(42 + 25) = S(67)</li>
<li>And S(67) = 68</li>
</ol>

<p><strong>Therefore: 42 + 26 = 68. ∎</strong></p>


<h3>888. 42 + 27 = 69</h3>

<ol>
<li>27 = S(26), so 42 + 27 = 42 + S(26)</li>
<li>By rule (b): 42 + S(26) = S(42 + 26)</li>
<li>Since 42 + 26 = 68 (established arithmetic fact)</li>
<li>So S(42 + 26) = S(68)</li>
<li>And S(68) = 69</li>
</ol>

<p><strong>Therefore: 42 + 27 = 69. ∎</strong></p>


<h3>889. 42 + 28 = 70</h3>

<ol>
<li>28 = S(27), so 42 + 28 = 42 + S(27)</li>
<li>By rule (b): 42 + S(27) = S(42 + 27)</li>
<li>Since 42 + 27 = 69 (established arithmetic fact)</li>
<li>So S(42 + 27) = S(69)</li>
<li>And S(69) = 70</li>
</ol>

<p><strong>Therefore: 42 + 28 = 70. ∎</strong></p>


<h3>890. 42 + 29 = 71</h3>

<ol>
<li>29 = S(28), so 42 + 29 = 42 + S(28)</li>
<li>By rule (b): 42 + S(28) = S(42 + 28)</li>
<li>Since 42 + 28 = 70 (established arithmetic fact)</li>
<li>So S(42 + 28) = S(70)</li>
<li>And S(70) = 71</li>
</ol>

<p><strong>Therefore: 42 + 29 = 71. ∎</strong></p>


<h3>891. 42 + 30 = 72</h3>

<ol>
<li>30 = S(29), so 42 + 30 = 42 + S(29)</li>
<li>By rule (b): 42 + S(29) = S(42 + 29)</li>
<li>Since 42 + 29 = 71 (established arithmetic fact)</li>
<li>So S(42 + 29) = S(71)</li>
<li>And S(71) = 72</li>
</ol>

<p><strong>Therefore: 42 + 30 = 72. ∎</strong></p>


<h3>892. 42 + 31 = 73</h3>

<ol>
<li>31 = S(30), so 42 + 31 = 42 + S(30)</li>
<li>By rule (b): 42 + S(30) = S(42 + 30)</li>
<li>Since 42 + 30 = 72 (established arithmetic fact)</li>
<li>So S(42 + 30) = S(72)</li>
<li>And S(72) = 73</li>
</ol>

<p><strong>Therefore: 42 + 31 = 73. ∎</strong></p>


<h3>893. 42 + 32 = 74</h3>

<ol>
<li>32 = S(31), so 42 + 32 = 42 + S(31)</li>
<li>By rule (b): 42 + S(31) = S(42 + 31)</li>
<li>Since 42 + 31 = 73 (established arithmetic fact)</li>
<li>So S(42 + 31) = S(73)</li>
<li>And S(73) = 74</li>
</ol>

<p><strong>Therefore: 42 + 32 = 74. ∎</strong></p>


<h3>894. 42 + 33 = 75</h3>

<ol>
<li>33 = S(32), so 42 + 33 = 42 + S(32)</li>
<li>By rule (b): 42 + S(32) = S(42 + 32)</li>
<li>Since 42 + 32 = 74 (established arithmetic fact)</li>
<li>So S(42 + 32) = S(74)</li>
<li>And S(74) = 75</li>
</ol>

<p><strong>Therefore: 42 + 33 = 75. ∎</strong></p>


<h3>895. 42 + 34 = 76</h3>

<ol>
<li>34 = S(33), so 42 + 34 = 42 + S(33)</li>
<li>By rule (b): 42 + S(33) = S(42 + 33)</li>
<li>Since 42 + 33 = 75 (established arithmetic fact)</li>
<li>So S(42 + 33) = S(75)</li>
<li>And S(75) = 76</li>
</ol>

<p><strong>Therefore: 42 + 34 = 76. ∎</strong></p>


<h3>896. 42 + 35 = 77</h3>

<ol>
<li>35 = S(34), so 42 + 35 = 42 + S(34)</li>
<li>By rule (b): 42 + S(34) = S(42 + 34)</li>
<li>Since 42 + 34 = 76 (established arithmetic fact)</li>
<li>So S(42 + 34) = S(76)</li>
<li>And S(76) = 77</li>
</ol>

<p><strong>Therefore: 42 + 35 = 77. ∎</strong></p>


<h3>897. 42 + 36 = 78</h3>

<ol>
<li>36 = S(35), so 42 + 36 = 42 + S(35)</li>
<li>By rule (b): 42 + S(35) = S(42 + 35)</li>
<li>Since 42 + 35 = 77 (established arithmetic fact)</li>
<li>So S(42 + 35) = S(77)</li>
<li>And S(77) = 78</li>
</ol>

<p><strong>Therefore: 42 + 36 = 78. ∎</strong></p>


<h3>898. 42 + 37 = 79</h3>

<ol>
<li>37 = S(36), so 42 + 37 = 42 + S(36)</li>
<li>By rule (b): 42 + S(36) = S(42 + 36)</li>
<li>Since 42 + 36 = 78 (established arithmetic fact)</li>
<li>So S(42 + 36) = S(78)</li>
<li>And S(78) = 79</li>
</ol>

<p><strong>Therefore: 42 + 37 = 79. ∎</strong></p>


<h3>899. 42 + 38 = 80</h3>

<ol>
<li>38 = S(37), so 42 + 38 = 42 + S(37)</li>
<li>By rule (b): 42 + S(37) = S(42 + 37)</li>
<li>Since 42 + 37 = 79 (established arithmetic fact)</li>
<li>So S(42 + 37) = S(79)</li>
<li>And S(79) = 80</li>
</ol>

<p><strong>Therefore: 42 + 38 = 80. ∎</strong></p>


<h3>900. 42 + 39 = 81</h3>

<ol>
<li>39 = S(38), so 42 + 39 = 42 + S(38)</li>
<li>By rule (b): 42 + S(38) = S(42 + 38)</li>
<li>Since 42 + 38 = 80 (established arithmetic fact)</li>
<li>So S(42 + 38) = S(80)</li>
<li>And S(80) = 81</li>
</ol>

<p><strong>Therefore: 42 + 39 = 81. ∎</strong></p>


<h3>901. 42 + 40 = 82</h3>

<ol>
<li>40 = S(39), so 42 + 40 = 42 + S(39)</li>
<li>By rule (b): 42 + S(39) = S(42 + 39)</li>
<li>Since 42 + 39 = 81 (established arithmetic fact)</li>
<li>So S(42 + 39) = S(81)</li>
<li>And S(81) = 82</li>
</ol>

<p><strong>Therefore: 42 + 40 = 82. ∎</strong></p>


<h3>902. 42 + 41 = 83</h3>

<ol>
<li>41 = S(40), so 42 + 41 = 42 + S(40)</li>
<li>By rule (b): 42 + S(40) = S(42 + 40)</li>
<li>Since 42 + 40 = 82 (established arithmetic fact)</li>
<li>So S(42 + 40) = S(82)</li>
<li>And S(82) = 83</li>
</ol>

<p><strong>Therefore: 42 + 41 = 83. ∎</strong></p>


<h3>903. 42 + 42 = 84</h3>

<ol>
<li>42 = S(41), so 42 + 42 = 42 + S(41)</li>
<li>By rule (b): 42 + S(41) = S(42 + 41)</li>
<li>Since 42 + 41 = 83 (established arithmetic fact)</li>
<li>So S(42 + 41) = S(83)</li>
<li>And S(83) = 84</li>
</ol>

<p><strong>Therefore: 42 + 42 = 84. ∎</strong></p>


<h3>904. 43 + 1 = 44</h3>

<ol>
<li>1 = S(0), so 43 + 1 = 43 + S(0)</li>
<li>By rule (b): 43 + S(0) = S(43 + 0)</li>
<li>Since 43 + 0 = 43 (established arithmetic fact)</li>
<li>So S(43 + 0) = S(43)</li>
<li>And S(43) = 44</li>
</ol>

<p><strong>Therefore: 43 + 1 = 44. ∎</strong></p>


<h3>905. 43 + 2 = 45</h3>

<ol>
<li>2 = S(1), so 43 + 2 = 43 + S(1)</li>
<li>By rule (b): 43 + S(1) = S(43 + 1)</li>
<li>Since 43 + 1 = 44 (established arithmetic fact)</li>
<li>So S(43 + 1) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 43 + 2 = 45. ∎</strong></p>


<h3>906. 43 + 3 = 46</h3>

<ol>
<li>3 = S(2), so 43 + 3 = 43 + S(2)</li>
<li>By rule (b): 43 + S(2) = S(43 + 2)</li>
<li>Since 43 + 2 = 45 (established arithmetic fact)</li>
<li>So S(43 + 2) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 43 + 3 = 46. ∎</strong></p>


<h3>907. 43 + 4 = 47</h3>

<ol>
<li>4 = S(3), so 43 + 4 = 43 + S(3)</li>
<li>By rule (b): 43 + S(3) = S(43 + 3)</li>
<li>Since 43 + 3 = 46 (established arithmetic fact)</li>
<li>So S(43 + 3) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 43 + 4 = 47. ∎</strong></p>


<h3>908. 43 + 5 = 48</h3>

<ol>
<li>5 = S(4), so 43 + 5 = 43 + S(4)</li>
<li>By rule (b): 43 + S(4) = S(43 + 4)</li>
<li>Since 43 + 4 = 47 (established arithmetic fact)</li>
<li>So S(43 + 4) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 43 + 5 = 48. ∎</strong></p>


<h3>909. 43 + 6 = 49</h3>

<ol>
<li>6 = S(5), so 43 + 6 = 43 + S(5)</li>
<li>By rule (b): 43 + S(5) = S(43 + 5)</li>
<li>Since 43 + 5 = 48 (established arithmetic fact)</li>
<li>So S(43 + 5) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 43 + 6 = 49. ∎</strong></p>


<h3>910. 43 + 7 = 50</h3>

<ol>
<li>7 = S(6), so 43 + 7 = 43 + S(6)</li>
<li>By rule (b): 43 + S(6) = S(43 + 6)</li>
<li>Since 43 + 6 = 49 (established arithmetic fact)</li>
<li>So S(43 + 6) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 43 + 7 = 50. ∎</strong></p>


<h3>911. 43 + 8 = 51</h3>

<ol>
<li>8 = S(7), so 43 + 8 = 43 + S(7)</li>
<li>By rule (b): 43 + S(7) = S(43 + 7)</li>
<li>Since 43 + 7 = 50 (established arithmetic fact)</li>
<li>So S(43 + 7) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 43 + 8 = 51. ∎</strong></p>


<h3>912. 43 + 9 = 52</h3>

<ol>
<li>9 = S(8), so 43 + 9 = 43 + S(8)</li>
<li>By rule (b): 43 + S(8) = S(43 + 8)</li>
<li>Since 43 + 8 = 51 (established arithmetic fact)</li>
<li>So S(43 + 8) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 43 + 9 = 52. ∎</strong></p>


<h3>913. 43 + 10 = 53</h3>

<ol>
<li>10 = S(9), so 43 + 10 = 43 + S(9)</li>
<li>By rule (b): 43 + S(9) = S(43 + 9)</li>
<li>Since 43 + 9 = 52 (established arithmetic fact)</li>
<li>So S(43 + 9) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 43 + 10 = 53. ∎</strong></p>


<h3>914. 43 + 11 = 54</h3>

<ol>
<li>11 = S(10), so 43 + 11 = 43 + S(10)</li>
<li>By rule (b): 43 + S(10) = S(43 + 10)</li>
<li>Since 43 + 10 = 53 (established arithmetic fact)</li>
<li>So S(43 + 10) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 43 + 11 = 54. ∎</strong></p>


<h3>915. 43 + 12 = 55</h3>

<ol>
<li>12 = S(11), so 43 + 12 = 43 + S(11)</li>
<li>By rule (b): 43 + S(11) = S(43 + 11)</li>
<li>Since 43 + 11 = 54 (established arithmetic fact)</li>
<li>So S(43 + 11) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 43 + 12 = 55. ∎</strong></p>


<h3>916. 43 + 13 = 56</h3>

<ol>
<li>13 = S(12), so 43 + 13 = 43 + S(12)</li>
<li>By rule (b): 43 + S(12) = S(43 + 12)</li>
<li>Since 43 + 12 = 55 (established arithmetic fact)</li>
<li>So S(43 + 12) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 43 + 13 = 56. ∎</strong></p>


<h3>917. 43 + 14 = 57</h3>

<ol>
<li>14 = S(13), so 43 + 14 = 43 + S(13)</li>
<li>By rule (b): 43 + S(13) = S(43 + 13)</li>
<li>Since 43 + 13 = 56 (established arithmetic fact)</li>
<li>So S(43 + 13) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 43 + 14 = 57. ∎</strong></p>


<h3>918. 43 + 15 = 58</h3>

<ol>
<li>15 = S(14), so 43 + 15 = 43 + S(14)</li>
<li>By rule (b): 43 + S(14) = S(43 + 14)</li>
<li>Since 43 + 14 = 57 (established arithmetic fact)</li>
<li>So S(43 + 14) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 43 + 15 = 58. ∎</strong></p>


<h3>919. 43 + 16 = 59</h3>

<ol>
<li>16 = S(15), so 43 + 16 = 43 + S(15)</li>
<li>By rule (b): 43 + S(15) = S(43 + 15)</li>
<li>Since 43 + 15 = 58 (established arithmetic fact)</li>
<li>So S(43 + 15) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 43 + 16 = 59. ∎</strong></p>


<h3>920. 43 + 17 = 60</h3>

<ol>
<li>17 = S(16), so 43 + 17 = 43 + S(16)</li>
<li>By rule (b): 43 + S(16) = S(43 + 16)</li>
<li>Since 43 + 16 = 59 (established arithmetic fact)</li>
<li>So S(43 + 16) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 43 + 17 = 60. ∎</strong></p>


<h3>921. 43 + 18 = 61</h3>

<ol>
<li>18 = S(17), so 43 + 18 = 43 + S(17)</li>
<li>By rule (b): 43 + S(17) = S(43 + 17)</li>
<li>Since 43 + 17 = 60 (established arithmetic fact)</li>
<li>So S(43 + 17) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 43 + 18 = 61. ∎</strong></p>


<h3>922. 43 + 19 = 62</h3>

<ol>
<li>19 = S(18), so 43 + 19 = 43 + S(18)</li>
<li>By rule (b): 43 + S(18) = S(43 + 18)</li>
<li>Since 43 + 18 = 61 (established arithmetic fact)</li>
<li>So S(43 + 18) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 43 + 19 = 62. ∎</strong></p>


<h3>923. 43 + 20 = 63</h3>

<ol>
<li>20 = S(19), so 43 + 20 = 43 + S(19)</li>
<li>By rule (b): 43 + S(19) = S(43 + 19)</li>
<li>Since 43 + 19 = 62 (established arithmetic fact)</li>
<li>So S(43 + 19) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 43 + 20 = 63. ∎</strong></p>


<h3>924. 43 + 21 = 64</h3>

<ol>
<li>21 = S(20), so 43 + 21 = 43 + S(20)</li>
<li>By rule (b): 43 + S(20) = S(43 + 20)</li>
<li>Since 43 + 20 = 63 (established arithmetic fact)</li>
<li>So S(43 + 20) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 43 + 21 = 64. ∎</strong></p>


<h3>925. 43 + 22 = 65</h3>

<ol>
<li>22 = S(21), so 43 + 22 = 43 + S(21)</li>
<li>By rule (b): 43 + S(21) = S(43 + 21)</li>
<li>Since 43 + 21 = 64 (established arithmetic fact)</li>
<li>So S(43 + 21) = S(64)</li>
<li>And S(64) = 65</li>
</ol>

<p><strong>Therefore: 43 + 22 = 65. ∎</strong></p>


<h3>926. 43 + 23 = 66</h3>

<ol>
<li>23 = S(22), so 43 + 23 = 43 + S(22)</li>
<li>By rule (b): 43 + S(22) = S(43 + 22)</li>
<li>Since 43 + 22 = 65 (established arithmetic fact)</li>
<li>So S(43 + 22) = S(65)</li>
<li>And S(65) = 66</li>
</ol>

<p><strong>Therefore: 43 + 23 = 66. ∎</strong></p>


<h3>927. 43 + 24 = 67</h3>

<ol>
<li>24 = S(23), so 43 + 24 = 43 + S(23)</li>
<li>By rule (b): 43 + S(23) = S(43 + 23)</li>
<li>Since 43 + 23 = 66 (established arithmetic fact)</li>
<li>So S(43 + 23) = S(66)</li>
<li>And S(66) = 67</li>
</ol>

<p><strong>Therefore: 43 + 24 = 67. ∎</strong></p>


<h3>928. 43 + 25 = 68</h3>

<ol>
<li>25 = S(24), so 43 + 25 = 43 + S(24)</li>
<li>By rule (b): 43 + S(24) = S(43 + 24)</li>
<li>Since 43 + 24 = 67 (established arithmetic fact)</li>
<li>So S(43 + 24) = S(67)</li>
<li>And S(67) = 68</li>
</ol>

<p><strong>Therefore: 43 + 25 = 68. ∎</strong></p>


<h3>929. 43 + 26 = 69</h3>

<ol>
<li>26 = S(25), so 43 + 26 = 43 + S(25)</li>
<li>By rule (b): 43 + S(25) = S(43 + 25)</li>
<li>Since 43 + 25 = 68 (established arithmetic fact)</li>
<li>So S(43 + 25) = S(68)</li>
<li>And S(68) = 69</li>
</ol>

<p><strong>Therefore: 43 + 26 = 69. ∎</strong></p>


<h3>930. 43 + 27 = 70</h3>

<ol>
<li>27 = S(26), so 43 + 27 = 43 + S(26)</li>
<li>By rule (b): 43 + S(26) = S(43 + 26)</li>
<li>Since 43 + 26 = 69 (established arithmetic fact)</li>
<li>So S(43 + 26) = S(69)</li>
<li>And S(69) = 70</li>
</ol>

<p><strong>Therefore: 43 + 27 = 70. ∎</strong></p>


<h3>931. 43 + 28 = 71</h3>

<ol>
<li>28 = S(27), so 43 + 28 = 43 + S(27)</li>
<li>By rule (b): 43 + S(27) = S(43 + 27)</li>
<li>Since 43 + 27 = 70 (established arithmetic fact)</li>
<li>So S(43 + 27) = S(70)</li>
<li>And S(70) = 71</li>
</ol>

<p><strong>Therefore: 43 + 28 = 71. ∎</strong></p>


<h3>932. 43 + 29 = 72</h3>

<ol>
<li>29 = S(28), so 43 + 29 = 43 + S(28)</li>
<li>By rule (b): 43 + S(28) = S(43 + 28)</li>
<li>Since 43 + 28 = 71 (established arithmetic fact)</li>
<li>So S(43 + 28) = S(71)</li>
<li>And S(71) = 72</li>
</ol>

<p><strong>Therefore: 43 + 29 = 72. ∎</strong></p>


<h3>933. 43 + 30 = 73</h3>

<ol>
<li>30 = S(29), so 43 + 30 = 43 + S(29)</li>
<li>By rule (b): 43 + S(29) = S(43 + 29)</li>
<li>Since 43 + 29 = 72 (established arithmetic fact)</li>
<li>So S(43 + 29) = S(72)</li>
<li>And S(72) = 73</li>
</ol>

<p><strong>Therefore: 43 + 30 = 73. ∎</strong></p>


<h3>934. 43 + 31 = 74</h3>

<ol>
<li>31 = S(30), so 43 + 31 = 43 + S(30)</li>
<li>By rule (b): 43 + S(30) = S(43 + 30)</li>
<li>Since 43 + 30 = 73 (established arithmetic fact)</li>
<li>So S(43 + 30) = S(73)</li>
<li>And S(73) = 74</li>
</ol>

<p><strong>Therefore: 43 + 31 = 74. ∎</strong></p>


<h3>935. 43 + 32 = 75</h3>

<ol>
<li>32 = S(31), so 43 + 32 = 43 + S(31)</li>
<li>By rule (b): 43 + S(31) = S(43 + 31)</li>
<li>Since 43 + 31 = 74 (established arithmetic fact)</li>
<li>So S(43 + 31) = S(74)</li>
<li>And S(74) = 75</li>
</ol>

<p><strong>Therefore: 43 + 32 = 75. ∎</strong></p>


<h3>936. 43 + 33 = 76</h3>

<ol>
<li>33 = S(32), so 43 + 33 = 43 + S(32)</li>
<li>By rule (b): 43 + S(32) = S(43 + 32)</li>
<li>Since 43 + 32 = 75 (established arithmetic fact)</li>
<li>So S(43 + 32) = S(75)</li>
<li>And S(75) = 76</li>
</ol>

<p><strong>Therefore: 43 + 33 = 76. ∎</strong></p>


<h3>937. 43 + 34 = 77</h3>

<ol>
<li>34 = S(33), so 43 + 34 = 43 + S(33)</li>
<li>By rule (b): 43 + S(33) = S(43 + 33)</li>
<li>Since 43 + 33 = 76 (established arithmetic fact)</li>
<li>So S(43 + 33) = S(76)</li>
<li>And S(76) = 77</li>
</ol>

<p><strong>Therefore: 43 + 34 = 77. ∎</strong></p>


<h3>938. 43 + 35 = 78</h3>

<ol>
<li>35 = S(34), so 43 + 35 = 43 + S(34)</li>
<li>By rule (b): 43 + S(34) = S(43 + 34)</li>
<li>Since 43 + 34 = 77 (established arithmetic fact)</li>
<li>So S(43 + 34) = S(77)</li>
<li>And S(77) = 78</li>
</ol>

<p><strong>Therefore: 43 + 35 = 78. ∎</strong></p>


<h3>939. 43 + 36 = 79</h3>

<ol>
<li>36 = S(35), so 43 + 36 = 43 + S(35)</li>
<li>By rule (b): 43 + S(35) = S(43 + 35)</li>
<li>Since 43 + 35 = 78 (established arithmetic fact)</li>
<li>So S(43 + 35) = S(78)</li>
<li>And S(78) = 79</li>
</ol>

<p><strong>Therefore: 43 + 36 = 79. ∎</strong></p>


<h3>940. 43 + 37 = 80</h3>

<ol>
<li>37 = S(36), so 43 + 37 = 43 + S(36)</li>
<li>By rule (b): 43 + S(36) = S(43 + 36)</li>
<li>Since 43 + 36 = 79 (established arithmetic fact)</li>
<li>So S(43 + 36) = S(79)</li>
<li>And S(79) = 80</li>
</ol>

<p><strong>Therefore: 43 + 37 = 80. ∎</strong></p>


<h3>941. 43 + 38 = 81</h3>

<ol>
<li>38 = S(37), so 43 + 38 = 43 + S(37)</li>
<li>By rule (b): 43 + S(37) = S(43 + 37)</li>
<li>Since 43 + 37 = 80 (established arithmetic fact)</li>
<li>So S(43 + 37) = S(80)</li>
<li>And S(80) = 81</li>
</ol>

<p><strong>Therefore: 43 + 38 = 81. ∎</strong></p>


<h3>942. 43 + 39 = 82</h3>

<ol>
<li>39 = S(38), so 43 + 39 = 43 + S(38)</li>
<li>By rule (b): 43 + S(38) = S(43 + 38)</li>
<li>Since 43 + 38 = 81 (established arithmetic fact)</li>
<li>So S(43 + 38) = S(81)</li>
<li>And S(81) = 82</li>
</ol>

<p><strong>Therefore: 43 + 39 = 82. ∎</strong></p>


<h3>943. 43 + 40 = 83</h3>

<ol>
<li>40 = S(39), so 43 + 40 = 43 + S(39)</li>
<li>By rule (b): 43 + S(39) = S(43 + 39)</li>
<li>Since 43 + 39 = 82 (established arithmetic fact)</li>
<li>So S(43 + 39) = S(82)</li>
<li>And S(82) = 83</li>
</ol>

<p><strong>Therefore: 43 + 40 = 83. ∎</strong></p>


<h3>944. 43 + 41 = 84</h3>

<ol>
<li>41 = S(40), so 43 + 41 = 43 + S(40)</li>
<li>By rule (b): 43 + S(40) = S(43 + 40)</li>
<li>Since 43 + 40 = 83 (established arithmetic fact)</li>
<li>So S(43 + 40) = S(83)</li>
<li>And S(83) = 84</li>
</ol>

<p><strong>Therefore: 43 + 41 = 84. ∎</strong></p>


<h3>945. 43 + 42 = 85</h3>

<ol>
<li>42 = S(41), so 43 + 42 = 43 + S(41)</li>
<li>By rule (b): 43 + S(41) = S(43 + 41)</li>
<li>Since 43 + 41 = 84 (established arithmetic fact)</li>
<li>So S(43 + 41) = S(84)</li>
<li>And S(84) = 85</li>
</ol>

<p><strong>Therefore: 43 + 42 = 85. ∎</strong></p>


<h3>946. 43 + 43 = 86</h3>

<ol>
<li>43 = S(42), so 43 + 43 = 43 + S(42)</li>
<li>By rule (b): 43 + S(42) = S(43 + 42)</li>
<li>Since 43 + 42 = 85 (established arithmetic fact)</li>
<li>So S(43 + 42) = S(85)</li>
<li>And S(85) = 86</li>
</ol>

<p><strong>Therefore: 43 + 43 = 86. ∎</strong></p>


<h3>947. 44 + 1 = 45</h3>

<ol>
<li>1 = S(0), so 44 + 1 = 44 + S(0)</li>
<li>By rule (b): 44 + S(0) = S(44 + 0)</li>
<li>Since 44 + 0 = 44 (established arithmetic fact)</li>
<li>So S(44 + 0) = S(44)</li>
<li>And S(44) = 45</li>
</ol>

<p><strong>Therefore: 44 + 1 = 45. ∎</strong></p>


<h3>948. 44 + 2 = 46</h3>

<ol>
<li>2 = S(1), so 44 + 2 = 44 + S(1)</li>
<li>By rule (b): 44 + S(1) = S(44 + 1)</li>
<li>Since 44 + 1 = 45 (established arithmetic fact)</li>
<li>So S(44 + 1) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 44 + 2 = 46. ∎</strong></p>


<h3>949. 44 + 3 = 47</h3>

<ol>
<li>3 = S(2), so 44 + 3 = 44 + S(2)</li>
<li>By rule (b): 44 + S(2) = S(44 + 2)</li>
<li>Since 44 + 2 = 46 (established arithmetic fact)</li>
<li>So S(44 + 2) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 44 + 3 = 47. ∎</strong></p>


<h3>950. 44 + 4 = 48</h3>

<ol>
<li>4 = S(3), so 44 + 4 = 44 + S(3)</li>
<li>By rule (b): 44 + S(3) = S(44 + 3)</li>
<li>Since 44 + 3 = 47 (established arithmetic fact)</li>
<li>So S(44 + 3) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 44 + 4 = 48. ∎</strong></p>


<h3>951. 44 + 5 = 49</h3>

<ol>
<li>5 = S(4), so 44 + 5 = 44 + S(4)</li>
<li>By rule (b): 44 + S(4) = S(44 + 4)</li>
<li>Since 44 + 4 = 48 (established arithmetic fact)</li>
<li>So S(44 + 4) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 44 + 5 = 49. ∎</strong></p>


<h3>952. 44 + 6 = 50</h3>

<ol>
<li>6 = S(5), so 44 + 6 = 44 + S(5)</li>
<li>By rule (b): 44 + S(5) = S(44 + 5)</li>
<li>Since 44 + 5 = 49 (established arithmetic fact)</li>
<li>So S(44 + 5) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 44 + 6 = 50. ∎</strong></p>


<h3>953. 44 + 7 = 51</h3>

<ol>
<li>7 = S(6), so 44 + 7 = 44 + S(6)</li>
<li>By rule (b): 44 + S(6) = S(44 + 6)</li>
<li>Since 44 + 6 = 50 (established arithmetic fact)</li>
<li>So S(44 + 6) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 44 + 7 = 51. ∎</strong></p>


<h3>954. 44 + 8 = 52</h3>

<ol>
<li>8 = S(7), so 44 + 8 = 44 + S(7)</li>
<li>By rule (b): 44 + S(7) = S(44 + 7)</li>
<li>Since 44 + 7 = 51 (established arithmetic fact)</li>
<li>So S(44 + 7) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 44 + 8 = 52. ∎</strong></p>


<h3>955. 44 + 9 = 53</h3>

<ol>
<li>9 = S(8), so 44 + 9 = 44 + S(8)</li>
<li>By rule (b): 44 + S(8) = S(44 + 8)</li>
<li>Since 44 + 8 = 52 (established arithmetic fact)</li>
<li>So S(44 + 8) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 44 + 9 = 53. ∎</strong></p>


<h3>956. 44 + 10 = 54</h3>

<ol>
<li>10 = S(9), so 44 + 10 = 44 + S(9)</li>
<li>By rule (b): 44 + S(9) = S(44 + 9)</li>
<li>Since 44 + 9 = 53 (established arithmetic fact)</li>
<li>So S(44 + 9) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 44 + 10 = 54. ∎</strong></p>


<h3>957. 44 + 11 = 55</h3>

<ol>
<li>11 = S(10), so 44 + 11 = 44 + S(10)</li>
<li>By rule (b): 44 + S(10) = S(44 + 10)</li>
<li>Since 44 + 10 = 54 (established arithmetic fact)</li>
<li>So S(44 + 10) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 44 + 11 = 55. ∎</strong></p>


<h3>958. 44 + 12 = 56</h3>

<ol>
<li>12 = S(11), so 44 + 12 = 44 + S(11)</li>
<li>By rule (b): 44 + S(11) = S(44 + 11)</li>
<li>Since 44 + 11 = 55 (established arithmetic fact)</li>
<li>So S(44 + 11) = S(55)</li>
<li>And S(55) = 56</li>
</ol>

<p><strong>Therefore: 44 + 12 = 56. ∎</strong></p>


<h3>959. 44 + 13 = 57</h3>

<ol>
<li>13 = S(12), so 44 + 13 = 44 + S(12)</li>
<li>By rule (b): 44 + S(12) = S(44 + 12)</li>
<li>Since 44 + 12 = 56 (established arithmetic fact)</li>
<li>So S(44 + 12) = S(56)</li>
<li>And S(56) = 57</li>
</ol>

<p><strong>Therefore: 44 + 13 = 57. ∎</strong></p>


<h3>960. 44 + 14 = 58</h3>

<ol>
<li>14 = S(13), so 44 + 14 = 44 + S(13)</li>
<li>By rule (b): 44 + S(13) = S(44 + 13)</li>
<li>Since 44 + 13 = 57 (established arithmetic fact)</li>
<li>So S(44 + 13) = S(57)</li>
<li>And S(57) = 58</li>
</ol>

<p><strong>Therefore: 44 + 14 = 58. ∎</strong></p>


<h3>961. 44 + 15 = 59</h3>

<ol>
<li>15 = S(14), so 44 + 15 = 44 + S(14)</li>
<li>By rule (b): 44 + S(14) = S(44 + 14)</li>
<li>Since 44 + 14 = 58 (established arithmetic fact)</li>
<li>So S(44 + 14) = S(58)</li>
<li>And S(58) = 59</li>
</ol>

<p><strong>Therefore: 44 + 15 = 59. ∎</strong></p>


<h3>962. 44 + 16 = 60</h3>

<ol>
<li>16 = S(15), so 44 + 16 = 44 + S(15)</li>
<li>By rule (b): 44 + S(15) = S(44 + 15)</li>
<li>Since 44 + 15 = 59 (established arithmetic fact)</li>
<li>So S(44 + 15) = S(59)</li>
<li>And S(59) = 60</li>
</ol>

<p><strong>Therefore: 44 + 16 = 60. ∎</strong></p>


<h3>963. 44 + 17 = 61</h3>

<ol>
<li>17 = S(16), so 44 + 17 = 44 + S(16)</li>
<li>By rule (b): 44 + S(16) = S(44 + 16)</li>
<li>Since 44 + 16 = 60 (established arithmetic fact)</li>
<li>So S(44 + 16) = S(60)</li>
<li>And S(60) = 61</li>
</ol>

<p><strong>Therefore: 44 + 17 = 61. ∎</strong></p>


<h3>964. 44 + 18 = 62</h3>

<ol>
<li>18 = S(17), so 44 + 18 = 44 + S(17)</li>
<li>By rule (b): 44 + S(17) = S(44 + 17)</li>
<li>Since 44 + 17 = 61 (established arithmetic fact)</li>
<li>So S(44 + 17) = S(61)</li>
<li>And S(61) = 62</li>
</ol>

<p><strong>Therefore: 44 + 18 = 62. ∎</strong></p>


<h3>965. 44 + 19 = 63</h3>

<ol>
<li>19 = S(18), so 44 + 19 = 44 + S(18)</li>
<li>By rule (b): 44 + S(18) = S(44 + 18)</li>
<li>Since 44 + 18 = 62 (established arithmetic fact)</li>
<li>So S(44 + 18) = S(62)</li>
<li>And S(62) = 63</li>
</ol>

<p><strong>Therefore: 44 + 19 = 63. ∎</strong></p>


<h3>966. 44 + 20 = 64</h3>

<ol>
<li>20 = S(19), so 44 + 20 = 44 + S(19)</li>
<li>By rule (b): 44 + S(19) = S(44 + 19)</li>
<li>Since 44 + 19 = 63 (established arithmetic fact)</li>
<li>So S(44 + 19) = S(63)</li>
<li>And S(63) = 64</li>
</ol>

<p><strong>Therefore: 44 + 20 = 64. ∎</strong></p>


<h3>967. 44 + 21 = 65</h3>

<ol>
<li>21 = S(20), so 44 + 21 = 44 + S(20)</li>
<li>By rule (b): 44 + S(20) = S(44 + 20)</li>
<li>Since 44 + 20 = 64 (established arithmetic fact)</li>
<li>So S(44 + 20) = S(64)</li>
<li>And S(64) = 65</li>
</ol>

<p><strong>Therefore: 44 + 21 = 65. ∎</strong></p>


<h3>968. 44 + 22 = 66</h3>

<ol>
<li>22 = S(21), so 44 + 22 = 44 + S(21)</li>
<li>By rule (b): 44 + S(21) = S(44 + 21)</li>
<li>Since 44 + 21 = 65 (established arithmetic fact)</li>
<li>So S(44 + 21) = S(65)</li>
<li>And S(65) = 66</li>
</ol>

<p><strong>Therefore: 44 + 22 = 66. ∎</strong></p>


<h3>969. 44 + 23 = 67</h3>

<ol>
<li>23 = S(22), so 44 + 23 = 44 + S(22)</li>
<li>By rule (b): 44 + S(22) = S(44 + 22)</li>
<li>Since 44 + 22 = 66 (established arithmetic fact)</li>
<li>So S(44 + 22) = S(66)</li>
<li>And S(66) = 67</li>
</ol>

<p><strong>Therefore: 44 + 23 = 67. ∎</strong></p>


<h3>970. 44 + 24 = 68</h3>

<ol>
<li>24 = S(23), so 44 + 24 = 44 + S(23)</li>
<li>By rule (b): 44 + S(23) = S(44 + 23)</li>
<li>Since 44 + 23 = 67 (established arithmetic fact)</li>
<li>So S(44 + 23) = S(67)</li>
<li>And S(67) = 68</li>
</ol>

<p><strong>Therefore: 44 + 24 = 68. ∎</strong></p>


<h3>971. 44 + 25 = 69</h3>

<ol>
<li>25 = S(24), so 44 + 25 = 44 + S(24)</li>
<li>By rule (b): 44 + S(24) = S(44 + 24)</li>
<li>Since 44 + 24 = 68 (established arithmetic fact)</li>
<li>So S(44 + 24) = S(68)</li>
<li>And S(68) = 69</li>
</ol>

<p><strong>Therefore: 44 + 25 = 69. ∎</strong></p>


<h3>972. 44 + 26 = 70</h3>

<ol>
<li>26 = S(25), so 44 + 26 = 44 + S(25)</li>
<li>By rule (b): 44 + S(25) = S(44 + 25)</li>
<li>Since 44 + 25 = 69 (established arithmetic fact)</li>
<li>So S(44 + 25) = S(69)</li>
<li>And S(69) = 70</li>
</ol>

<p><strong>Therefore: 44 + 26 = 70. ∎</strong></p>


<h3>973. 44 + 27 = 71</h3>

<ol>
<li>27 = S(26), so 44 + 27 = 44 + S(26)</li>
<li>By rule (b): 44 + S(26) = S(44 + 26)</li>
<li>Since 44 + 26 = 70 (established arithmetic fact)</li>
<li>So S(44 + 26) = S(70)</li>
<li>And S(70) = 71</li>
</ol>

<p><strong>Therefore: 44 + 27 = 71. ∎</strong></p>


<h3>974. 44 + 28 = 72</h3>

<ol>
<li>28 = S(27), so 44 + 28 = 44 + S(27)</li>
<li>By rule (b): 44 + S(27) = S(44 + 27)</li>
<li>Since 44 + 27 = 71 (established arithmetic fact)</li>
<li>So S(44 + 27) = S(71)</li>
<li>And S(71) = 72</li>
</ol>

<p><strong>Therefore: 44 + 28 = 72. ∎</strong></p>


<h3>975. 44 + 29 = 73</h3>

<ol>
<li>29 = S(28), so 44 + 29 = 44 + S(28)</li>
<li>By rule (b): 44 + S(28) = S(44 + 28)</li>
<li>Since 44 + 28 = 72 (established arithmetic fact)</li>
<li>So S(44 + 28) = S(72)</li>
<li>And S(72) = 73</li>
</ol>

<p><strong>Therefore: 44 + 29 = 73. ∎</strong></p>


<h3>976. 44 + 30 = 74</h3>

<ol>
<li>30 = S(29), so 44 + 30 = 44 + S(29)</li>
<li>By rule (b): 44 + S(29) = S(44 + 29)</li>
<li>Since 44 + 29 = 73 (established arithmetic fact)</li>
<li>So S(44 + 29) = S(73)</li>
<li>And S(73) = 74</li>
</ol>

<p><strong>Therefore: 44 + 30 = 74. ∎</strong></p>


<h3>977. 44 + 31 = 75</h3>

<ol>
<li>31 = S(30), so 44 + 31 = 44 + S(30)</li>
<li>By rule (b): 44 + S(30) = S(44 + 30)</li>
<li>Since 44 + 30 = 74 (established arithmetic fact)</li>
<li>So S(44 + 30) = S(74)</li>
<li>And S(74) = 75</li>
</ol>

<p><strong>Therefore: 44 + 31 = 75. ∎</strong></p>


<h3>978. 44 + 32 = 76</h3>

<ol>
<li>32 = S(31), so 44 + 32 = 44 + S(31)</li>
<li>By rule (b): 44 + S(31) = S(44 + 31)</li>
<li>Since 44 + 31 = 75 (established arithmetic fact)</li>
<li>So S(44 + 31) = S(75)</li>
<li>And S(75) = 76</li>
</ol>

<p><strong>Therefore: 44 + 32 = 76. ∎</strong></p>


<h3>979. 44 + 33 = 77</h3>

<ol>
<li>33 = S(32), so 44 + 33 = 44 + S(32)</li>
<li>By rule (b): 44 + S(32) = S(44 + 32)</li>
<li>Since 44 + 32 = 76 (established arithmetic fact)</li>
<li>So S(44 + 32) = S(76)</li>
<li>And S(76) = 77</li>
</ol>

<p><strong>Therefore: 44 + 33 = 77. ∎</strong></p>


<h3>980. 44 + 34 = 78</h3>

<ol>
<li>34 = S(33), so 44 + 34 = 44 + S(33)</li>
<li>By rule (b): 44 + S(33) = S(44 + 33)</li>
<li>Since 44 + 33 = 77 (established arithmetic fact)</li>
<li>So S(44 + 33) = S(77)</li>
<li>And S(77) = 78</li>
</ol>

<p><strong>Therefore: 44 + 34 = 78. ∎</strong></p>


<h3>981. 44 + 35 = 79</h3>

<ol>
<li>35 = S(34), so 44 + 35 = 44 + S(34)</li>
<li>By rule (b): 44 + S(34) = S(44 + 34)</li>
<li>Since 44 + 34 = 78 (established arithmetic fact)</li>
<li>So S(44 + 34) = S(78)</li>
<li>And S(78) = 79</li>
</ol>

<p><strong>Therefore: 44 + 35 = 79. ∎</strong></p>


<h3>982. 44 + 36 = 80</h3>

<ol>
<li>36 = S(35), so 44 + 36 = 44 + S(35)</li>
<li>By rule (b): 44 + S(35) = S(44 + 35)</li>
<li>Since 44 + 35 = 79 (established arithmetic fact)</li>
<li>So S(44 + 35) = S(79)</li>
<li>And S(79) = 80</li>
</ol>

<p><strong>Therefore: 44 + 36 = 80. ∎</strong></p>


<h3>983. 44 + 37 = 81</h3>

<ol>
<li>37 = S(36), so 44 + 37 = 44 + S(36)</li>
<li>By rule (b): 44 + S(36) = S(44 + 36)</li>
<li>Since 44 + 36 = 80 (established arithmetic fact)</li>
<li>So S(44 + 36) = S(80)</li>
<li>And S(80) = 81</li>
</ol>

<p><strong>Therefore: 44 + 37 = 81. ∎</strong></p>


<h3>984. 44 + 38 = 82</h3>

<ol>
<li>38 = S(37), so 44 + 38 = 44 + S(37)</li>
<li>By rule (b): 44 + S(37) = S(44 + 37)</li>
<li>Since 44 + 37 = 81 (established arithmetic fact)</li>
<li>So S(44 + 37) = S(81)</li>
<li>And S(81) = 82</li>
</ol>

<p><strong>Therefore: 44 + 38 = 82. ∎</strong></p>


<h3>985. 44 + 39 = 83</h3>

<ol>
<li>39 = S(38), so 44 + 39 = 44 + S(38)</li>
<li>By rule (b): 44 + S(38) = S(44 + 38)</li>
<li>Since 44 + 38 = 82 (established arithmetic fact)</li>
<li>So S(44 + 38) = S(82)</li>
<li>And S(82) = 83</li>
</ol>

<p><strong>Therefore: 44 + 39 = 83. ∎</strong></p>


<h3>986. 44 + 40 = 84</h3>

<ol>
<li>40 = S(39), so 44 + 40 = 44 + S(39)</li>
<li>By rule (b): 44 + S(39) = S(44 + 39)</li>
<li>Since 44 + 39 = 83 (established arithmetic fact)</li>
<li>So S(44 + 39) = S(83)</li>
<li>And S(83) = 84</li>
</ol>

<p><strong>Therefore: 44 + 40 = 84. ∎</strong></p>


<h3>987. 44 + 41 = 85</h3>

<ol>
<li>41 = S(40), so 44 + 41 = 44 + S(40)</li>
<li>By rule (b): 44 + S(40) = S(44 + 40)</li>
<li>Since 44 + 40 = 84 (established arithmetic fact)</li>
<li>So S(44 + 40) = S(84)</li>
<li>And S(84) = 85</li>
</ol>

<p><strong>Therefore: 44 + 41 = 85. ∎</strong></p>


<h3>988. 44 + 42 = 86</h3>

<ol>
<li>42 = S(41), so 44 + 42 = 44 + S(41)</li>
<li>By rule (b): 44 + S(41) = S(44 + 41)</li>
<li>Since 44 + 41 = 85 (established arithmetic fact)</li>
<li>So S(44 + 41) = S(85)</li>
<li>And S(85) = 86</li>
</ol>

<p><strong>Therefore: 44 + 42 = 86. ∎</strong></p>


<h3>989. 44 + 43 = 87</h3>

<ol>
<li>43 = S(42), so 44 + 43 = 44 + S(42)</li>
<li>By rule (b): 44 + S(42) = S(44 + 42)</li>
<li>Since 44 + 42 = 86 (established arithmetic fact)</li>
<li>So S(44 + 42) = S(86)</li>
<li>And S(86) = 87</li>
</ol>

<p><strong>Therefore: 44 + 43 = 87. ∎</strong></p>


<h3>990. 44 + 44 = 88</h3>

<ol>
<li>44 = S(43), so 44 + 44 = 44 + S(43)</li>
<li>By rule (b): 44 + S(43) = S(44 + 43)</li>
<li>Since 44 + 43 = 87 (established arithmetic fact)</li>
<li>So S(44 + 43) = S(87)</li>
<li>And S(87) = 88</li>
</ol>

<p><strong>Therefore: 44 + 44 = 88. ∎</strong></p>


<h3>991. 45 + 1 = 46</h3>

<ol>
<li>1 = S(0), so 45 + 1 = 45 + S(0)</li>
<li>By rule (b): 45 + S(0) = S(45 + 0)</li>
<li>Since 45 + 0 = 45 (established arithmetic fact)</li>
<li>So S(45 + 0) = S(45)</li>
<li>And S(45) = 46</li>
</ol>

<p><strong>Therefore: 45 + 1 = 46. ∎</strong></p>


<h3>992. 45 + 2 = 47</h3>

<ol>
<li>2 = S(1), so 45 + 2 = 45 + S(1)</li>
<li>By rule (b): 45 + S(1) = S(45 + 1)</li>
<li>Since 45 + 1 = 46 (established arithmetic fact)</li>
<li>So S(45 + 1) = S(46)</li>
<li>And S(46) = 47</li>
</ol>

<p><strong>Therefore: 45 + 2 = 47. ∎</strong></p>


<h3>993. 45 + 3 = 48</h3>

<ol>
<li>3 = S(2), so 45 + 3 = 45 + S(2)</li>
<li>By rule (b): 45 + S(2) = S(45 + 2)</li>
<li>Since 45 + 2 = 47 (established arithmetic fact)</li>
<li>So S(45 + 2) = S(47)</li>
<li>And S(47) = 48</li>
</ol>

<p><strong>Therefore: 45 + 3 = 48. ∎</strong></p>


<h3>994. 45 + 4 = 49</h3>

<ol>
<li>4 = S(3), so 45 + 4 = 45 + S(3)</li>
<li>By rule (b): 45 + S(3) = S(45 + 3)</li>
<li>Since 45 + 3 = 48 (established arithmetic fact)</li>
<li>So S(45 + 3) = S(48)</li>
<li>And S(48) = 49</li>
</ol>

<p><strong>Therefore: 45 + 4 = 49. ∎</strong></p>


<h3>995. 45 + 5 = 50</h3>

<ol>
<li>5 = S(4), so 45 + 5 = 45 + S(4)</li>
<li>By rule (b): 45 + S(4) = S(45 + 4)</li>
<li>Since 45 + 4 = 49 (established arithmetic fact)</li>
<li>So S(45 + 4) = S(49)</li>
<li>And S(49) = 50</li>
</ol>

<p><strong>Therefore: 45 + 5 = 50. ∎</strong></p>


<h3>996. 45 + 6 = 51</h3>

<ol>
<li>6 = S(5), so 45 + 6 = 45 + S(5)</li>
<li>By rule (b): 45 + S(5) = S(45 + 5)</li>
<li>Since 45 + 5 = 50 (established arithmetic fact)</li>
<li>So S(45 + 5) = S(50)</li>
<li>And S(50) = 51</li>
</ol>

<p><strong>Therefore: 45 + 6 = 51. ∎</strong></p>


<h3>997. 45 + 7 = 52</h3>

<ol>
<li>7 = S(6), so 45 + 7 = 45 + S(6)</li>
<li>By rule (b): 45 + S(6) = S(45 + 6)</li>
<li>Since 45 + 6 = 51 (established arithmetic fact)</li>
<li>So S(45 + 6) = S(51)</li>
<li>And S(51) = 52</li>
</ol>

<p><strong>Therefore: 45 + 7 = 52. ∎</strong></p>


<h3>998. 45 + 8 = 53</h3>

<ol>
<li>8 = S(7), so 45 + 8 = 45 + S(7)</li>
<li>By rule (b): 45 + S(7) = S(45 + 7)</li>
<li>Since 45 + 7 = 52 (established arithmetic fact)</li>
<li>So S(45 + 7) = S(52)</li>
<li>And S(52) = 53</li>
</ol>

<p><strong>Therefore: 45 + 8 = 53. ∎</strong></p>


<h3>999. 45 + 9 = 54</h3>

<ol>
<li>9 = S(8), so 45 + 9 = 45 + S(8)</li>
<li>By rule (b): 45 + S(8) = S(45 + 8)</li>
<li>Since 45 + 8 = 53 (established arithmetic fact)</li>
<li>So S(45 + 8) = S(53)</li>
<li>And S(53) = 54</li>
</ol>

<p><strong>Therefore: 45 + 9 = 54. ∎</strong></p>


<h3>1000. 45 + 10 = 55</h3>

<ol>
<li>10 = S(9), so 45 + 10 = 45 + S(9)</li>
<li>By rule (b): 45 + S(9) = S(45 + 9)</li>
<li>Since 45 + 9 = 54 (established arithmetic fact)</li>
<li>So S(45 + 9) = S(54)</li>
<li>And S(54) = 55</li>
</ol>

<p><strong>Therefore: 45 + 10 = 55. ∎</strong></p>


</div>
<script>
try {
  const input = document.getElementById('filterInput');
  const countLabel = document.getElementById('countLabel');
  const headers = Array.from(document.querySelectorAll('h3'));
  const total = headers.length;

  function updateCount(visible) {
    countLabel.textContent = visible === total ? total + " proofs" : visible + " of " + total + " proofs";
  }

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    let visible = 0;
    headers.forEach(h => {
      const match = h.textContent.toLowerCase().includes(q);
      let node = h;
      const group = [h];
      node = h.nextElementSibling;
      while (node && node.tagName !== 'H3') {
        group.push(node);
        node = node.nextElementSibling;
      }
      group.forEach(el => el.classList.toggle('hidden', !match && q.length > 0));
      if (match || q.length === 0) visible++;
    });
    updateCount(visible);
  });
  updateCount(total);
} catch (e) { console.error(e); }
</script>
</body>
</html>
