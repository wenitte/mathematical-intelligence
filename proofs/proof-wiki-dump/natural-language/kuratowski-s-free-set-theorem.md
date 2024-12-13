# 

Source: https://proofwiki.org/wiki/Kuratowski%27s_Free_Set_Theorem


This article needs to be linked to other articles.In particular: $\aleph_n$, $\omega_{n-1}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.




Theorem
Let $n \in \Z_{>0}$ be a positive integer.
Let $X$ be an infinite set.
Let $\left[{X}\right]^n$ denote the set of $n$-element subsets of $X$ whose cardinality is $n$.
Let $\left[{X}\right]^{< \aleph_0}$ denote the set of finitesubsets of $X$.
Then:

the cardinality of $X$ is greater than or equal to $\aleph_n$
if and only if

for every mapping $f: \left[{X}\right]^n \to \left[{X}\right]^{<\aleph_0}$ there exists an $(n + 1)$-element free subset of $X$ with respect to $f$.
That is, a subset $Y$ of $X$ with $n+1$ elements such that $y \notin f \left({Y \setminus \left\{{y}\right\} }\right)$ for all $y \in Y$.


Proof, part 1
We show that the conclusion does not hold if $\left\vert{X}\right\vert < \aleph_n$. 
For each $n > 0$ we will find a function $f_n: \left[{\omega_{n-1} }\right]^n \to \left[{\omega_{n-1}}\right]^{<\aleph_0}$ which has no free set of size $n+1$.
The restriction of $f$ to any subset of $\omega_{n-1}$ will then witness that this subset does not satisfy the conclusion of the theorem. 
For $n = 1$, let $f_1: \omega \to \left[{\omega}\right]^{<\aleph_0}$ be defined by $f_1 \left({n}\right) = \left\{{0, \ldots, n-1}\right\}$.
Then for every $\left\{{k, n}\right\} \in \left[{\omega}\right]^2$ we have $k < n$ or $n < k$. 
So $K \in f \left({n}\right)$ or $n \in f \left({k}\right)$.
Hence the set $\left\{{k, n}\right\}$ is not free.

We continue by induction.
Assume that for every set $A$ such that $\left\vert{A}\right\vert < \aleph_n$ there is a function $f_n^A: \left[{A}\right]^n \to \left[{A}\right]^{< \aleph_0}$ which has no free set of size $n+1$.
We define a function $f_{n+1}: \left[{\omega_n}\right]^{n+1} \to \left[{\omega_n}\right]^{<\aleph_0}$ as follows:

$(1): \quad$ Every set if $\left[{\omega_n}\right]^{n+1}$ can be written as $Y \cup \left\{{z}\right\}$ with $Y \in \left[{\omega_n}\right]^n$, $z \in \omega_n$, $z > \max Y$.
$(2): \quad$ We let $f_{n+1} \left({Y \cup \left\{{z}\right\} }\right) := f_n^z \left({Y}\right)$.
Note that $z$ is an ordinal $< \omega_n$, hence a set of size $<\aleph_n$.
So $f_n^y$ is a well-defined function on $\left[{y}\right]^n$.
The set $Y$ is in the domain of this function.

To conclude the proof, we claim that no set $B := \left\{{y_0 < y_1 < \cdots < y_n < z}\right\}$ can be free for $f_{n+1}$.
By definition, the function $f_n^z$ has no free set of size $n+1$.
So in particular, the set $\left\{{y_0, \ldots, y_n}\right\}$ is not free for $f_n^z$, say:

$y_i \in f_n^z \left({y_0, \ldots, y_{i-1}, y_{i+1}, \ldots, y_n}\right)$
But then also:

$y_i \in f_{n+1} \left({B \setminus y_i}\right)$
Hence $B$ is not free.


Proof, part 2
We show that the conclusion holds if $\left\vert{X}\right\vert \ge \aleph_n$.
In this case, $X$ will have a subset $Y$ of cardinality $\aleph_n$.
Hence it is enough to find a free subset for every function $f$ on $\left[{Y}\right]^{n+1}$. 

For $n = 1$, let $f: \omega_1 \to \left[{\omega_1}\right]^{< \aleph_0}$ be any function.
The set:
$S:= \left\{{\delta < \omega_1: \delta \text{ limit}, \forall \alpha < \delta: f \left({\alpha}\right) \subseteq \delta}\right\}$
is certainly an unbounded set (in fact it is a closed unbounded subset of $\omega_1$), as follows:
For every $\alpha_0< \omega_1$ the supremum of the $\omega$-sequence $\alpha_0 < f^* \left({\alpha_0}\right) < f^* \left({f^* \left({\alpha_0}\right)}\right) < \cdots $ will be in $S$. 
So let $\delta \in S$ be infinite.
Let $\alpha < \delta $ be such that $\alpha \notin f \left({\delta}\right)$.
Then also $\delta \notin f \left({\alpha}\right)$.
So $\left\{{\alpha, \delta}\right\}$ is free for $f$. 

Again we continue by induction.
Let $ n\ge 2$, and let $f: \left[{\omega_n}\right]^n \to \left[{\omega_n}\right]^{<\aleph_0}$ be any function.
As before, the set:

$S := \left\{ {\delta < \omega_1 : \delta \text{ limit}, \forall \alpha_1 < \cdots < \alpha_n < \delta: f \left({\alpha_1, \ldots, \alpha_n}\right) \subseteq \delta}\right\}$
is unbounded. 
Let $\delta \in S$ such that $\delta \ge \omega_{n-1}$. 
Now the function $f': \left[{\delta}\right]^{n-1} \to \left[{\delta}\right]^{<\aleph_0}$, defined as:

$f' \left({x_1, \ldots, x_{n-1} }\right) := f \left({x_1, \ldots, x_{n-1}, \delta}\right)$
is an $n-1$-ary function on a set of size $\aleph_{n-1}$.
So by the induction hypothesis there is a set $A = \left\{{\alpha_1 < \cdots < \alpha_n}\right\}$ which is free with respect to $f'$.
We claim that $A \cup \left\{{\delta}\right\} = \left\{{\alpha_1 < \cdots < \alpha_n < \delta}\right\}$ is free for $f$.
By definition of $\delta$ we have:

$\delta \notin f \left({\alpha_1, \ldots, \alpha_n}\right)$
and the freeness of $A$ with respect to $f'$ ensures:

$\alpha_i \notin f' \left({A \setminus \left\{{\alpha_i}\right\} }\right) = f \left({A \setminus \left\{ {\alpha_i}\right\} \cup \left\{ {\delta}\right\} }\right)$.

$\blacksquare$


Source of Name
This entry was named for Kazimierz Kuratowski.





