# 

Source: https://proofwiki.org/wiki/Real_Numbers_are_Uncountably_Infinite



Theorem
The set of real numbers $\R$ is uncountably infinite.


Cantor's First Proof
We prove the equivalent result that every sequence $\sequence {x_k}_{k \mathop \in \N}$ omits at least one $x \in \R$.

Let $\sequence {x_k}_{k \mathop \in \N}$ be a sequence of distinct real numbers.
Let a sequence of closed real intervals $\sequence {I_n}$ be defined as follows:
Let:














\(\ds a_k\)

\(=\)







\(\ds \min \set {x_k, x_{k + 1} }\)




















\(\ds b_k\)

\(=\)







\(\ds \max \set {x_k, x_{k + 1} }\)




















\(\ds I_k\)

\(=\)







\(\ds \closedint {a_k} {b_k}\)










Since the terms of $\sequence {x_k}_{k \mathop \in \N}$ are distinct, $a_k \ne b_k$.
Thus $I_k$ is not a singleton.
Let:

$I_{n - 1} = \closedint {a_{n - 1} } {b_{n - 1} }$
It can be assumed that infinitely many of the $x_k$ lie inside $I_{n - 1}$.
Otherwise the proof is complete.

Let $y$ and $z$ be the first two such terms of $\sequence {x_k}_{k \mathop \in \N}$.
Let:














\(\ds a_n\)

\(=\)







\(\ds \min \set {y, z}\)




















\(\ds b_n\)

\(=\)







\(\ds \max \set {y, z}\)




















\(\ds I_n\)

\(=\)







\(\ds \closedint {a_n} {b_n}\)










Thus we have sequences:

$\sequence {a_k}_{k \mathop \in \N}$
$\sequence {b_k}_{k \mathop \in \N}$
with:

$ a_1 < a_2 < \cdots < b_2 < b_1$
So $\sequence {a_k}_{k \mathop \in \N}$ and $\sequence {b_k}_{k \mathop \in \N}$ are monotone, and bounded above and bounded below respectively.
Therefore by the Monotone Convergence Theorem (Real Analysis) both are convergent.
Let:














\(\ds A\)

\(=\)







\(\ds \lim_{k \mathop \to \infty} a_k\)




















\(\ds B\)

\(=\)







\(\ds \lim_{k \mathop \to \infty} b_k\)










Clearly we have $A \le B$.
So:

$\closedint A B \ne \O$
Let $h \in \closedint A B$.
Then:

$\forall k: h \ne a_k, b_k$

We claim that $h \ne x_k$ for all $k$. 
Suppose that $h = x_k$ for some $k$. 
Then there are only finitely many terms in the sequence before $h$ occurs.


This article, or a section of it, needs explaining.In particular: "the sequence" -- which one in particular? There are a few under discussion here.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore only finitely many of the $a_k$ precede $h$.
Let $a_d$ be the last term of the sequence $\sequence {a_k}_{k \mathop \in \N}$ preceding $h$.
We defined $a_{d + 1}$, $b_{d + 1}$ to be interior points of $I_d$, and also $h \in I_{d + 1}$ by the definition of $h$.


This article, or a section of it, needs explaining.In particular: Where are those interior points so defined?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore $a_{d + 1}$ must precede $h$ in the sequence, for the sequence is increasing.
This is a contradiction.


This article, or a section of it, needs explaining.In particular: Specify precisely what assumption this contradiction falsifies.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Cantor's Second Proof
By definition, a perfect set is a set $X$ such that every element $x \in X$ is the limit of a sequence of elements of $X$ distinct from $x$.
From Real Numbers form Perfect Set, $\R$ is perfect.
Therefore it is sufficient to show that a perfect subset of $X \subseteq \R^k$ is uncountable.
We prove the equivalent result that every sequence $\sequence {x_k}_{k \mathop \in \N} \subseteq X$ omits at least one element of $X$.

Let $y_1 \in X$.
Let $B_1:= \map {\BB_r} {y_1}$ be a closed ball whose center is at $y_1$.
Consider a closed ball:

$B_{n - 1} \supseteq B_n := \map {\BB_{\map \delta n} } {y_n}$
such that:

$\map \delta n \le \dfrac {\map \delta {n - 1} } 2$
$y_n \in X$
$x_n \notin B_n$
Note that $\map \delta 1 = r$.

We can satisfy the condition $x_n \notin B_n$ because $X$ is perfect, so every closed ball whose center is at an element of $X$ contains infinitely many elements of $X$.

Since $\map \delta n \le \dfrac r {2^{n - 1} }$, $y_n$ is Cauchy.
Therefore from Perfect Set is Closed, we may let:

$\ds Y = \lim_{n \mathop \to \infty} y_n \in X$

For $n \in \N$ we have:

$\set {y_m: m > n} \subseteq B_n$
so $Y \in B_n$.
But by construction:

$\forall n \in \N: x_n \notin B_n$
Therefore:

$\forall n \in \N: Y \ne x_n$
and the proof is complete.
$\blacksquare$


Cantor's Diagonal Argument
We show that the unit interval $\hointr 0 1$ is uncountable, from which uncountability of $\R$ follows immediately.

Aiming for a contradiction, suppose that $\hointr 0 1$ is countable.

First we note that $\hointr 0 1$ is not finite because $\dfrac 1 n \in \hointr 0 1$ are distinct for all $n \in \N$.
Therefore an injection $\hointr 0 1 \hookrightarrow \N$ enumerates $\hointr 0 1$ with a subset of the natural numbers.
By renaming, we can associate each $x \in \hointr 0 1$ to exactly one natural number to obtain a bijection.
(We have by hypothesis that such a mapping can be constructed).
Let $g$ be such a correspondence:














\(\ds 1\)

\(\leftrightarrow\)







\(\ds 0.d_{11} d_{12} d_{13} \ldots\)




















\(\ds 2\)

\(\leftrightarrow\)







\(\ds 0.d_{21} d_{22} d_{23} \ldots\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds n\)

\(\leftrightarrow\)







\(\ds 0.d_{n1} d_{n2} d_{n3} \ldots\)




















\(\ds \)

\(\vdots\)







\(\ds \)









where juxtaposition of digits describes the decimal expansion of a number.
By Existence of Base-$N$ Representation, any decimal expansion of a real number exists and is unique, or else has exactly two representative strings.
In this case, if there are exactly two representations, one will have an infinite trail of $9$s, and one will terminate.


This article needs to be linked to other articles.In particular: this is proven somewhere, find itYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Restrict $g$ such that there exists no infinite strings of $9$s in the decimal expansions in the question, that is, to the set:

$S := \set {f: \N \to \set {0, 1, 2, \ldots, 9} \middle\vert \, \forall M \in \N: \exists m \ge M: \map f m \ne 9}$

Work In ProgressIn particular: There is a better $\LaTeX$ construct for the aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
of sequences in $\set {0, 1, 2, \ldots, 9}$ not ending in infinitely many $9$s.

Define $g'$ as the restriction of $g$ to $S$:

$g' := g \restriction S$
That is, construct $g'$ such that there exist no infinite strings of $9$s in the decimal expansions in question.
From Injection to Image is Bijection, $g'$ is a bijection
Hence, a fortiori, $g'$ is a surjection.
For every $k \in \N$, define $f_k = d_{k k} + 1$ taken modulo $10$. 
That is, $f: 0 \mapsto 1, 1 \mapsto 2, \dots, 8 \mapsto 9, 9 \mapsto 0$.
Let $y$ be defined by the decimal expansion:

$y = 0.f_1 f_2 f_3 \ldots$

Now:

$y$ differs from $\map {g'} 1$ in the first digit of the decimal expansion
$y$ differs from $\map {g'} 2$ the second digit of the decimal expansion
and generally the $n$th digit of the decimal expansion of $\map {g'} n$ and $y$ is different.
So $y$ can be none of the numbers $\map {g'} n$ for $n \in \N$.
But this contradicts our $g'$ is a surjection.
From this contradiction it is deduced that $\hointr 0 1$ is not countable.


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
$\blacksquare$


Set-Theoretical Approach: Proof 1
By Surjection from Natural Numbers iff Countable, a set $A$ is countable if and only if there exists a surjection $f: \N \to A$.
Suppose there exists a surjection $f: \N \to \R$.
Then $\forall x \in \R: \exists n \in \N: \map f n = x$ as $f$ is surjective.
Let $d_{n, 0}$ be the integer before the decimal point of $\map f n$.
Similarly, for all $m > 0$, let $d_{n, m}$ be the $m$th digit in the decimal expansion of $\map f n$.
Let $e_0$ be an integer different from $d_{0, 0}$.
Similarly, for all $m > 0$, let $e_m$ be an integer different from $d_{m, m}$.
Specifically, we can define $e_0$ to be $d_{0, 0} + 1$, and:

$e_m = \begin {cases} 1 & : d_{m, m} \ne 1 \\ 2 & : d_{m, m} = 1 \end {cases}$

Now consider the real number $\ds x = e_0 + \sum_{n \mathop = 1}^\infty \frac {e_n} {10^n}$.
Its decimal expansion is:

$x = \sqbrk {e_0 . e_1 e_2 e_3 \ldots}_{10}$
Since $e_0 \ne d_{0, 0}$, $x \ne \map f 0$.
Similarly, for each $n \in \N$ such that $n \ge 1$, we have that $e_n \ne d_{n, n}$ and so $x \ne \map f n$.
Thus $x$ is a real number which is not in the set $\set {\map f n: n \in \N}$.
Hence $f$ can not be surjective.
$\blacksquare$


Set-Theoretical Approach: Proof 2
By Cantor's Theorem there is no surjection:

$\N \twoheadrightarrow \powerset \N$
Additionally, we have Power Set of Natural Numbers is not Countable.
Therefore, if we can show that $\powerset \N$ injects into $\R$ then there is no injection $\R \hookrightarrow \N$ and $\R$ is uncountable.

To prove the theorem we construct an injection $f: \powerset \N \to \R$.

For a subset $S \subseteq \N$, let $\chi_S$ be the characteristic function of $S$, and let $d_i = \map {\chi_S} i$ for all $i \in \N$.
By the definition of characteristic function, $\sequence {d_i}_{i \mathop \in \N}$ is an infinite sequence of $1$s and $0$s.

There are two cases: $\sequence {d_i}_{i \mathop \in \N}$ terminates in an infinite sequence of $1$s, or it does not.

Suppose $\sequence {d_i}_{i \mathop \in \N}$ does not terminate in an infinite sequence of $1$s.
Then $\map f S$ is the binary expansion of the following number in $\hointr 0 1$:

$0.d_1 d_2 d_3 d_4 \ldots$

Otherwise $\sequence {d_i}_{i \mathop \in \N}$ does terminate in an infinite sequence of $1$s.
Then $\map f S$ is the integer expressed in binary as:

$1 d_1 d_2 d_3 \ldots d_k$
where $d_k$ is the last member of the sequence not equal to $1$.

In either case, every subset of $\N$, that is, element of $\powerset \N$, is mapped to an element of $\R$.
That $f$ is an injection follows from the uniqueness statement of Existence of Base-N Representation.
$\blacksquare$


Proof 1 using Ternary Notation
It is sufficient to show that the real interval $I = \set {x \in \R: 0 < x \le 1}$ is uncountable.
Let $x \in I$.
From Existence of Base-N Representation, $x$ has a unique representation of the form:

$x = \dfrac {\epsilon_1} 3 + \dfrac {\epsilon_2} {3^2} + \dfrac {\epsilon_3} {3^3} + \cdots$
where $\epsilon_k = 0, 1$ or $2$ and an infinite number of $\epsilon_k$ are different from $0$.
Let $S \subseteq I$ be countably infinite.
Let $S = \set {x_1, x_2, \ldots}$.
Let $\epsilon_{k 1}, \epsilon_{k 2}, \epsilon_{k 3}, \ldots$ be the ternary digits of $x_k$.
Let $\epsilon_k = 1 + 2 \epsilon_{k k} - \epsilon_{k k}^2$ so that:

$\epsilon_k = 1$ if $\epsilon_{k k} = 0$ or $\epsilon_{k k} = 2$
$\epsilon_k = 2$ if $\epsilon_{k k} = 1$
Then:

$(1): \quad \forall k: \epsilon_k \ne 0$
$(2): \quad \forall k: \epsilon_k \ne \epsilon_{k k}$
We have that $0 < x \le 1$ so $x \in I$.
But the real number $\displaystyle x = \sum \epsilon_k 3^{-k}$ is different from every $x_k \in I$.
Thus we have found an element of $I$ which is not an element of $S$.
Therefore $S$ is a proper subset of $I$.
It follows by definition that $I$ is uncountable.
$\blacksquare$


Proof 2 using Ternary Notation
Define a mapping $f: \powerset {\N_{>0} } \to \R$ thus:

$\map f S = 0.d_1 d_2 \ldots$, interpreted as a ternary expansion where $\sequence {d_n}$ is the characteristic function of $S$.
That is:

$\ds \map f S = \sum_{i \mathop \in S} 3^{-i}$
By the lemma, $f$ is an injection.
Aiming for a contradiction, suppose that $\R$ is countable.
Then there is an injection $g: \R \to \N$.
By Composite of Injections is Injection, $g \circ f: \powerset \N \to \N$ is an injection.
But this contradicts No Injection from Power Set to Set.
Hence, by Proof by Contradiction, $\R$ is not countable.
$\blacksquare$


Historical Note
The fact that the Real Numbers are Uncountably Infinite was first demonstrated by Georg Cantor in $1874$.
Cantor's first and second proofs given above are less well known than the diagonal argument, and were in fact downplayed by Cantor himself: the first proof was given as an aside in his paper proving the countability of the algebraic numbers.
Joseph Warren Dauben conjectures that this was because Cantor feared opposition from Leopold Kronecker among other contemporaries who aggressively dismissed Cantor's ideas.
In particular Cantor's first proof is worth reading; several texts reject the first proof as being more complicated and less instructive, but this seems to have arisen because the Diagonal argument has proven to be a more versatile tool and thus the others forgotten and dismissed. 
In this instance the first and second proofs of Cantor are of equal merit to the diagonal argument, and the three together present clearly the flavor of the theorem.


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 1.1$. Sets: Example $6$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): nondenumerable
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): nondenumerable




