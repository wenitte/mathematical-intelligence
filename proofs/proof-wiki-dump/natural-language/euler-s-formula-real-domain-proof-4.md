# 

Source: https://proofwiki.org/wiki/Euler%27s_Formula/Real_Domain/Proof_4

Theorem
Let $\theta \in \R$ be a real number.
Then:

$e^{i \theta} = \cos \theta + i \sin \theta$


Proof
Note that the following proof, as written, only holds for real $\theta$.
Define:

$\map x \theta = e^{i \theta}$
$\map y \theta = \cos \theta + i \sin \theta$
Consider first $\theta \ge 0$.
Taking Laplace transforms:














\(\ds \map {\laptrans {\map x \theta} } s\)

\(=\)







\(\ds \map {\laptrans {e^{i \theta} } } s\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {s - i}\)





Laplace Transform of Exponential














\(\ds \map {\laptrans {\map y \theta} } s\)

\(=\)







\(\ds \map {\laptrans {\cos \theta + i \sin \theta} } s\)




















\(\ds \)

\(=\)







\(\ds \map {\laptrans {\cos \theta} } s + i \, \map {\laptrans {\sin \theta} } s\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \frac s {s^2 + 1} + \frac i {s^2 + 1}\)





Laplace Transform of Cosine, Laplace Transform of Sine














\(\ds \)

\(=\)







\(\ds \frac {s + i} {\paren {s + i} \paren {s - i} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {s - i}\)









So $x$ and $y$ have the same Laplace transform for $\theta \ge 0$.

Now define $\tau = -\theta, \sigma = -s$, and consider $\theta < 0$ so that $\tau > 0$.
Taking Laplace transforms of $\map x \tau$ and $\map y \tau$: 














\(\ds \map {\laptrans {\map x \tau} } \sigma\)

\(=\)







\(\ds \frac 1 {\sigma - i}\)





from above














\(\ds \map {\laptrans {\map y \tau} } \sigma\)

\(=\)







\(\ds \frac 1 {\sigma - i}\)





from above



So $\map x \theta$ and $\map y \theta$ have the same Laplace transforms for $\theta < 0$.
The result follows from Injectivity of Laplace Transform.
$\blacksquare$





