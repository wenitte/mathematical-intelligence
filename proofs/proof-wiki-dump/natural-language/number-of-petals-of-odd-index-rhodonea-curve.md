# 

Source: https://proofwiki.org/wiki/Number_of_Petals_of_Odd_Index_Rhodonea_Curve

Theorem
Let $n$ be an odd positive integer.
Let $R$ be a rhodonea curve defined by one of the polar equations:














\(\ds r\)

\(=\)







\(\ds a \cos n \theta\)




















\(\ds r\)

\(=\)







\(\ds a \sin n \theta\)










Then $R$ has $n$ petals.


Proof
Let $R$ be defined by $r = a \cos n \theta$.
The tips of each of the petals of $R$ occur when $\cos n \theta = \pm 1$.
This happens whenever $n \theta \in \set {0, \pi}$.
Thus for $0 \le \theta < 2 \pi$, the tips occur at:

$\theta \in \set {\dfrac {2 k \pi} {2 n}: k \in \set {0, 1, \ldots, 2 n - 1} }$

Let $k < n$.
Then each of $\dfrac {2 k \pi} {2 n}$ is a distinct value between $0$ and $\pi$.
Hence there are at least $n$ petals, one for each $k \in \set {0, 1, \ldots, n - 1}$.

Now consider $\theta \in \hointr \pi {2 \pi}$.
From Cosine of Angle plus Straight Angle, we have that:

$\cos \theta = -\map \cos {\theta - \pi}$
But as $\theta$ is on the opposite side of the circle to $\theta - \pi$, the points they describe are exactly the same.
Hence the petals for $\theta \ge \pi$ are in the same place as that for $\theta < \pi$.

So for $\pi \le \theta < 2 \pi$ the pattern will be traced out again.
Hence the result.
$\blacksquare$


This article contains statements that are justified by handwavery.In particular: Anyone care to make this a bit more rigorous?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 11$: Special Plane Curves: Three-Leaved Rose: $11.16$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): rose
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): rose
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): rose
Weisstein, Eric W. "Rose." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/Rose.html




