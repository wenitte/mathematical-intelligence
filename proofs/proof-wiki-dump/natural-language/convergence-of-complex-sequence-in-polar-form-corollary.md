# 

Source: https://proofwiki.org/wiki/Convergence_of_Complex_Sequence_in_Polar_Form/Corollary

Corollary to Convergence of Complex Sequence in Polar Form
Let $\left\langle{z_n}\right\rangle$ be a sequence of nonzero complex numbers.
Let $z \ne 0$ be a complex number with modulus $r$ and argument $\theta$.
Let $I$ be a real interval of length at most $2 \pi$ that contains $\theta$.
Suppose $\theta$ is not an endpoint of $I$.
Suppose each $z_n$ admits an argument $\theta_n \in I$.
Let $r_n$ be the modulus of $z_n$.

Then $z_n$ converges to $z$ if and only if $r_n$ converges to $r$ and $\theta_n$ converges to $\theta$.


Proof
Suppose $r_n \to r$ and $\theta_n \to \theta$.
Then by Convergence of Complex Sequence in Polar Form, $z_n \to z$.

Conversely, suppose $z_n \to z$.
By Convergence of Complex Sequence in Polar Form, we have:

$(1): \quad r_n \to r$
$(2): \quad$ There exists a sequence $\left\langle{k_n}\right\rangle$ of integers such that $\theta_n + 2 k_n \pi$ converges to $\theta$.
It remains to be proved that $\theta_n \to \theta$.
Let $N \in \N$ such that $\left\vert{\theta_N + 2 k_N \pi - \theta}\right\vert \le \pi / 2$ for all $n \ge N$.
By the Triangle Inequality for Real Numbers:

$\left\vert{2 k_n \pi - 2 k_N \pi}\right\vert \le \left\vert{\theta_n + 2 k_n \pi - \theta}\right\vert + \left\vert{\theta_N + 2 k_N \pi - \theta}\right\vert \le \pi$
for all $n \ge N$.
Thus $\left\vert{k_n - k_N}\right\vert \le 1 / 2$, so $k_n = k_N$ for all $n \ge N$.
By the Triangle Inequality for Real Numbers:

$\left\vert{2 \pi k_N}\right\vert \le \left\vert{\theta_n - \theta}\right\vert + \left\vert{\theta_n + 2 \pi k_N - \theta}\right\vert$
for all $n \in \N$.
Because $\theta_n \in I$ and $\theta$ is not an endpoint of $I$:

$\left\vert{\theta_n - \theta}\right\vert < 2 \pi$
for all $n \in \N$.
Because $\theta_n + 2 \pi k_N - \theta \to 0$:

$\left\vert{2 \pi k_N}\right\vert < 2 \pi$
Thus $k_n = 0$ for all $n \ge N$.
Thus $\theta_n \to \theta$.
$\blacksquare$





