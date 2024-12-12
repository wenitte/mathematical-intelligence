# 

Source: https://proofwiki.org/wiki/Buffon%27s_Needle



Theorem
Let a horizontal plane be divided into strips by a series of parallel lines a fixed distance apart, like floorboards.
Let a needle whose length equals the distance between the parallel lines be dropped onto the plane randomly from a random height.

Then the probability that the needle falls across one of the parallel lines is $\dfrac 2 \pi$.



This article is complete as far as it goes, but it could do with expansion.In particular: In fact, Buffon proved the more general problem of the needle of length $l$ on floorboards distance $d$ apart where $l < d$. Answer is $\dfrac {2 l} {\pi d}$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
For simplicity, consider the real number plane $\R^2$ divided into strips by the lines $x = k$ for each integer $k$.
Then the needle would have length $1$, which is the distance between the lines.

Define $\theta \in \hointr {-\dfrac \pi 2} {\dfrac \pi 2}$ as the angle between the needle and the $x$-axis.
Then the horizontal component of length of the needle is $\cos \theta$ for each $\theta$.

Let:

$E$ be the event where the needle falls across the vertical lines,
$\Theta_\theta$ be the event where the angle between the needle and the $x$-axis is $\theta$.

Let the needle drop.
Without loss of generality, let the end with the larger $x$-coordinate have $x$-coordinate $0 \le x_n < 1$.
Then for each $\theta$, the needle falls across the line $x = 0$ exactly when $0 \le x_n \le \cos \theta$.
Therefore the probability that this happens is:

$\condprob E {\Theta_\theta} = \dfrac {\cos \theta} 1 = \cos \theta$

By considering $\theta$ as a continuous random variable,














\(\ds \map \Pr E\)

\(=\)







\(\ds \sum_{\theta \mathop \in \hointr {-\pi / 2} {\pi / 2} } \condprob E {\Theta_\theta} \map \Pr {\Theta_\theta}\)





Total Probability Theorem














\(\ds \)

\(=\)







\(\ds \int_{-\pi / 2}^{\pi / 2} \cos \theta \frac {\d \theta} \pi\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac 1 \pi \sin\theta} {-\pi / 2} {\pi / 2}\)





Primitive of Cosine Function














\(\ds \)

\(=\)







\(\ds \frac 1 \pi \paren {1 - \paren {-1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi\)









$\blacksquare$


Also known as
The problem of Buffon's Needle, along with the Buffon-Laplace Problem, is also known just as the Needle Problem.


Also see
Buffon-Laplace Problem


Source of Name
This entry was named for Georges Louis Leclerc, Comte de Buffon.


Historical Note
Georges Louis Leclerc, Comte de Buffon published this problem in his Histoire Naturelle in $1777$.
Pierre-Simon de Laplace extended the problem to a general rectangular grid, thus creating what is now sometimes referred to as the Buffon-Laplace Problem.
Augustus De Morgan reports that a pupil of his once performed a practical experiment using Buffon's Needle to calculate a value for $\pi$.
After $600$ trials, a value of $3.137$ was obtained.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41972 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41971 \ldots$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Buffon's needle problem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Buffon's needle problem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Buffon's needle




