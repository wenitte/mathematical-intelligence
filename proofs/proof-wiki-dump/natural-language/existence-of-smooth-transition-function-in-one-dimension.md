# 

Source: https://proofwiki.org/wiki/Existence_of_Smooth_Transition_Function_in_One_Dimension

Theorem
Let $a, b, c, d \in \R$ be real numbers with $a < b < c < d$. 
Then there exists a smooth function $h : \R \to \closedint 0 1$ such that:

$\map h x = 1$ for $x \in \closedint b c$
and:

$\map h x = 0$ for $x \in \R \setminus \openint a d$


Proof
First define $f : \R \to \R$ by:

$\ds \map f x = \begin{cases}e^{-1/x} & x \ge 0 \\ 0 & x < 0\end{cases}$
for each $x \in \R$.
Note that $\map f x \ge 0$ for all $x \in \R$. 
We first show that $f$ is smooth.

Lemma
$f$ is smooth with:

$\ds \map {f^{(n)} } x = \begin{cases}\map {P_n} {\frac 1 x} e^{-1/x} & x > 0 \\ 0 & x \le 0\end{cases}$
for each $n \ge 1$, for some polynomial $P_n$. 
$\Box$

Note that for all $x \in \R$ we have $\map f x \ge 0$. 
Now define $g : \R \to \R$ by:

$\ds \map g x = \frac {\map f x} {\map f x + \map f {1 - x} }$
for each $x \in \R$.
Note that we cannot simultaneously have $x \le 0$ and $1 - x \le 0$, and we have $\map f x > 0$ for $x > 0$, so this is well-defined.
By repeated application of the Quotient Rule, $g$ is smooth.
For $x \ge 1$, we have $\map f {1 - x} = 0$ and so $\map g x = 1$.
For $x \le 0$, we have $\map f x = 0$ and so $\map g x = 0$.
Note that for $0 < x < 1$, we have $\map f x > 0$ and hence:

$\ds 0 \le \frac {\map f x} {\map f x + \map f {1 - x} } \le \frac {\map f x} {\map f x} = 1$
Now, define:

$\ds \map h x = \map g {\frac {x - a} {b - a} } \map g {\frac {d - x} {d - c} }$
By the Product Rule and Chain Rule, $h$ is smooth.
We show that $h$ is our desired function.
Note that:

$\ds \frac {x - a} {b - a} \ge 1$
is equivalent to $x \ge b$, and:

$\ds \frac {x - a} {b - a} \le 0$
is equivalent to $x \le a$.
Note also that:

$\ds \frac {d - x} {d - c} \ge 1$
is equivalent to $x \le c$, and:

$\ds \frac {d - x} {d - c} \le 0$
is equivalent to $x \ge d$.
Hence if $x \le a$ we have:

$\ds \frac {x - a} {b - a} \le 0$
and so:

$\ds \map g {\frac {x - a} {b - a} } = 0$
If $x \ge d$, then:

$\ds \frac {d - x} {d - c} \le 0$
and so:

$\ds \map g {\frac {d - x} {d - c} } = 0$
Hence $\map h x = 0$ for $x \in \R \setminus \openint a d$.
If $b \le x \le c$, then we have:

$\ds \frac {x - a} {b - a} \ge 1$
and:

$\ds \frac {d - x} {d - c} \ge 1$
So:

$\ds \map g {\frac {d - x} {d - c} } = \map g {\frac {x - a} {b - a} } = 1$
Hence $\map h x = 1$ for $x \in \closedint b c$.
We have already shown that $0 \le \map g x \le 1$ for each $x \in \R$.
Hence $0 \le \map h x \le 1$ for each $x \in \R$.
So $h$ is our desired function.
$\blacksquare$





