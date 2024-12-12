# 

Source: https://proofwiki.org/wiki/Convergence_of_Complex_Sequence_in_Polar_Form

Theorem
Let $z \ne 0$ be a complex number with modulus $r$ and argument $\theta$.
Let $\sequence {z_n}$ be a sequence of nonzero complex numbers.
Let $r_n$ be the modulus of $z_n$ and $\theta_n$ be an argument of $z_n$.

Then $z_n$ converges to $z$ if and only if the following hold:

$(1): \quad r_n$ converges to $r$
$(2): \quad$ There exists a sequence $\sequence {k_n}$ of integers such that $\theta_n + 2 k_n \pi$ converges to $\theta$.


Corollary
Let $\left\langle{z_n}\right\rangle$ be a sequence of nonzero complex numbers.
Let $z \ne 0$ be a complex number with modulus $r$ and argument $\theta$.
Let $I$ be a real interval of length at most $2 \pi$ that contains $\theta$.
Suppose $\theta$ is not an endpoint of $I$.
Suppose each $z_n$ admits an argument $\theta_n \in I$.
Let $r_n$ be the modulus of $z_n$.

Then $z_n$ converges to $z$ if and only if $r_n$ converges to $r$ and $\theta_n$ converges to $\theta$.


Proof
Suppose $r_n \to r$ and $\theta_n + 2 k_n \pi \to \theta$.
We have, by Complex Modulus of Difference of Complex Numbers:














\(\ds \cmod {z_n - z}^2\)

\(=\)







\(\ds r_n^2 + r^2 - 2 r r_n \, \map \cos {\theta_n + 2 k_n \pi - \theta}\)









Because Cosine Function is Continuous:

$\map \cos {\theta_n + 2 k_n \pi - \theta} \to 1$
It follows that:

$\cmod {z_n - z}^2 \to 0$

Conversely, suppose $z_n \to z$.
By Modulus of Limit, $r_n \to r$.
We have, by Complex Modulus of Difference of Complex Numbers:














\(\ds \map \cos {\theta_n - \theta}\)

\(=\)







\(\ds \frac {r_n^2 + r^2 - \cmod {z_n - z}^2} {2 r r_n} \to 1\)









By Convergence of Cosine of Sequence, there exists a sequence $\sequence {k_n}$ of integers such that $\theta_n + 2 k_n \pi$ converges to $\theta$.
$\blacksquare$





