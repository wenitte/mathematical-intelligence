# 

Source: https://proofwiki.org/wiki/Continuous_Injection_of_Interval_is_Strictly_Monotone

Theorem
Let $I$ be a real interval.
Let $f: I \to \R$ be an injective continuous real function.

Then $f$ is strictly monotone.


Proof
Aiming for a contradiction, suppose $f$ is not strictly monotone.
That is, there exist $x, y, z \in I$ with $x < y < z$ such that either:

$\map f x \le \map f y$ and $\map f y \ge \map f z$
or:

$\map f x \ge \map f y$ and $\map f y \le \map f z$

Suppose $\map f x \le \map f y$ and $\map f y \ge \map f z$.
If $\map f x = \map f y$, or $\map f y = \map f z$, or $\map f x = \map f z$, $f$ is not injective, which is a contradiction.
Thus, $\map f x < \map f y$ and $\map f y > \map f z$.

Suppose $\map f x < \map f z$.
That is:

$\map f x < \map f z < \map f y$
As $f$ is continuous on $I$, the Intermediate Value Theorem can be applied.
Hence there exists $c \in \openint x y$ such that $\map f c = \map f z$.
As $z \notin \openint x y$, we have $c \ne z$.
So $f$ is not injective, which is a contradiction.

Suppose instead $\map f x > \map f z$.
That is:

$\map f z < \map f x < \map f y$
Again, as $f$ is continuous on $I$, the Intermediate Value Theorem can be applied.
Then, there exists $c \in \openint y z$ such that $\map f c = \map f x$.
So $f$ is not injective, which is a contradiction.

If we suppose $\map f x \ge \map f y$ and $\map f y \le \map f z$, we reach a similar contradiction.
By Proof by Contradiction, $f$ is strictly monotone.
$\blacksquare$





