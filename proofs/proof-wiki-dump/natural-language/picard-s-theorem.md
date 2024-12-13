# 

Source: https://proofwiki.org/wiki/Picard%27s_Theorem


This page has been identified as a candidate for refactoring of advanced complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Little Picard Theorem
A nonconstant entire function $f: \C \to \C$ omits at most one complex value $a \in \C$.


Big Picard Theorem
Let:

$U \subset \C$ be a domain
$z_0 \in U$
$f: U \setminus \set {z_0} \to \C$ be a holomorphic function with an essential singularity at $z_0$.
Then $f$ omits at most one complex value $a \in \C$.


Proof of the little Picard theorem using the universal cover of the twice-punctured plane
For this proof, we use the fact that there is a holomorphic covering map:

$\phi: \Bbb D \to \C \setminus \set {0, 1}$
where $\Bbb D = \set {z \in \C: \cmod z < 1}$.
This follows from the Riemann Uniformization Theorem, but is much easier to prove.
Indeed, such a covering is given by the elliptic modular function.

Now suppose that an entire function $f: \C \to \C$ omits two different complex values.
Assume for simplicity that the omitted values are $0$ and $1$.
This can always be achieved by postcomposing $f$ with a suitable complex affine map.
Because $\C$ is simply connected and $\phi$ is a covering, we can lift $f$ to a holomorphic function:

$F: \C \to \Bbb D$
with $\phi \circ F = f$.
By Liouville's Theorem (Complex Analysis), $F$ is constant.
Therefore $f$ is also constant.
Hence the result.
$\blacksquare$


Proof of the Big Picard Theorem using Montel's Theorem
Montel's Theorem is a very close relative of Picard's theorem.
It states that a family of holomorphic functions that all omit the same two values is normal.
(Recall that a family $\FF$ of holomorphic functions $f: U \to \C$ is normal if every sequence in $\FF$ has a subsequence that converges locally uniformly to a holomorphic function or to infinity.)

Without loss of generality, assume that $U = \Bbb D = \set {z \in \C: \cmod z < 1}$, and that $z_0 = 0$.
Suppose that $f: \Bbb D \setminus \set 0 \to \C$ is an analytic function that omits two different values $a, b \in \C$.
We need to show that $0$ is a pole or a removable singularity of $f$.

If $\map f z \to \infty$ as $z \to 0$, then $0$ is a pole.
So suppose that there is a sequence $z_n \to 0$ such that $\map f {z_n}$ converges to a value $w \ne \infty$.
We may assume that:

$\cmod {z_n}$ is strictly decreasing
$\cmod {z_n} < \dfrac 1 2$ for all $n$.
Let $\lambda_n := 2 z_n$.
Consider the sequence of functions:

$f_n: \Bbb D \setminus \set 0 \to \C \setminus \set {a, b}$
such that:

$\map {f_n} z := \map f {\lambda_n z}$

By Montel's Theorem (actually a stronger version of Montel's Theorem, also called the Fundamental Normality Test), this family is normal.
So we may assume, passing to a subsequence if necessary, that $f_n$ converges locally uniformly to a holomorphic function or to $\infty$.
Note that:

$\map {f_n} {\dfrac 1 2} = \map f {z_n} \to w$
so $f_n$ does not converge to $\infty$.
Let us set:

$K_n := \max_{\cmod z = 1/2} \cmod {\map {f_n} z} = \max_{\cmod z = \cmod {z_n} } \cmod {\map f z}$
It follows from the above that

$\ds K := \sup_{n \mathop \in \N} K_n < \infty$
But by the Maximum Principle:

$\cmod {\map f z} \le \max \set {K_{n -1}, K_n} \le K$
whenever $\cmod {z_n} \le \cmod z \le \cmod {z_{n - 1} }$.
So $\cmod {\map f z} \le K$ for $\cmod z < \cmod {z_0}$, and hence $0$ is a removable singularity by the Riemann Removable Singularities Theorem.


Proof that big Picard implies little Picard
By the Fundamental Theorem of Algebra, a nonconstant polynomial does not omit any value.
Hence it suffices to prove the little Picard theorem when $f$ has an essential singularity at $\infty$, in which case it follows from the big Picard theorem.


Remarks
The above proof of the little Picard theorem using the universal cover of a twice-punctured plane can also be used to prove Montel's theorem. There are also more elementary proofs, using Zalcman's Rescaling Lemma.
The little Picard theorem also implies Montel's theorem, using the Rescaling Lemma. Hence all three theorems are equivalent.
This is an instance of the heuristic Bloch principle, which states that properties that force entire functions to be constant also force families of functions to be normal.


This article, or a section of it, needs explaining.In particular: (Recall that a family $\FF$ of holomorphic functions $f: U \to \C$ is normal if every sequence in $\FF$ has a subsequence that converges locally uniformly to a holomorphic function or to infinity.) Link needed to this result.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Source of Name
This entry was named for Charles Émile Picard.





