# 

Source: https://proofwiki.org/wiki/Inverse_of_Cantor_Pairing_Function_is_Primitive_Recursive

Theorem
Define $k : \N \to \N$ as:

$\map k z$ is the largest $k$ such that $T_k \le z$
where $T_k$ is the $k$-th triangular number.
Let $\pi_1 : \N \to \N$ be defined as:

$\ds \map {\pi_1} z = z - T_{\map k z}$
Let $\pi_2 : \N \to \N$ be defined as:

$\map {\pi_2} z = \map k z - \map {\pi_1} z$

Then, $\pi_1$ and $\pi_2$ are primitive recursive functions.


Proof
As $n = \map k z$ is the largest $n$ such that:

$T_n \le z$
holds, it follows that $n = \map k z + 1$ is the smallest $n$ such that:

$T_n \le z$
fails.
Or, in other words, $n = \map k z$ the smallest $n$ such that:

$T_{n + 1} > z$
holds.
It follows that we can define $k : \N \to \N$ as:

$\map k z = \map {\mu n} {T_{n + 1} > z}$

In order for $k$ to be primitive recursive in this way, we need the minimization to be bounded.
We will define:

$\map k z = \map {\mu n \le z} {T_{n + 1} > z}$
Aiming for a contradiction, suppose for $z \in \N$, every $n \le z$ fails $T_{n + 1} > z$.
Then, in particular, $T_{z + 1} > z$ fails.
But by definition of triangular number:

$T_{z + 1} = z + 1 + T_z \ge z + 1 > z$
which is a contradiction.
Therefore, for every $z \in \N$:

$\map {\mu n \le z} {T_{n + 1} > z} = \map {\mu n} {T_{n + 1} > z}$

Define $t : \N \to \N$ as:

$\map t k = T_k$
which is primitive recursive by Triangular Numbers are Primitive Recursive.
Thus, we have:

$\map k z = \map {\mu n \le z} {\map t {n + 1} > z}$
which is primitive recursive by:

Bounded Minimization is Primitive Recursive
Ordering Relations are Primitive Recursive
Addition is Primitive Recursive
Constant Function is Primitive Recursive
$\Box$

By Inverse of Cantor Pairing Function, $\pi_1$ and $\pi_2$ are well-defined.
That is, for every $z$:

$\map {\pi_1} z \ge 0$
$\map {\pi_2} z \ge 0$
or:

$z \ge T_{\map k z}$
$\map k z \ge \map {\pi_1} z$

Since these always hold, we have:

$\map {\pi_1} z = z \mathop {\dot -} T_{\map k z}$
$\map {\pi_2} z = \map k z \mathop {\dot -} \map {\pi_1} z$
where $\dot -$ denotes partial subtraction.
Thus, we have:

$\map {\pi_1} z = z \mathop {\dot -} \map t {\map k z}$
From Cut-Off Subtraction is Primitive Recursive, this is primitive recursive.
By the same reasoning, $\pi_2$ is primitive recursive as well.
$\blacksquare$





