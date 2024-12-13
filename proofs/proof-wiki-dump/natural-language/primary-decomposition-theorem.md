# 

Source: https://proofwiki.org/wiki/Primary_Decomposition_Theorem


This article needs to be linked to other articles.In particular: Throughout to results usedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of basic complexity.In particular: Split into two, and transcludeUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $K$ be a field.
Let $V$ be a vector space over $K$.
Let $T: V \to V$ be a linear operator on $V$.
Let $\map p x \in K \sqbrk x$ be a polynomial such that:

$\map \deg p \ge 1$
$\map p T = 0$
where $0$ is the zero operator on $V$.


This article, or a section of it, needs explaining.In particular: Link to definition of $K \sqbrk x$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\map {p_1} x, \map {p_2} x, \ldots, \map {p_r} x$ be distinct irreducible monic polynomials.
Let $c \in K \setminus \set 0$ and $a_1, a_2, \ldots, a_r, r \in \Z_{\ge 1}$ be constants.
We have that:

$\map p x = c \map {p_1} x^{a_1} \map {p_2} x^{a_2} \dotsm \map {p_r} x^{a_r}$

The primary decomposition theorem then states the following :

$(1): \quad \map \ker {\map {p_i} T^{a_i} }$ is a $T$-invariant subspace of $V$ for all $i = 1, 2, \dotsc, r$
$(2): \quad \ds V = \bigoplus_{i \mathop = 1}^r \map \ker {\map {p_i} T^{a_i} }$

This article, or a section of it, needs explaining.In particular: Link to definition of $\bigoplus$ in this context.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Rather than dragging the unwieldy $\map \ker {\map {p_i} T^{a_i} }$ all around the page, suggest that a symbol e.g. $\kappa_i$ be used for it instead. There are many more places where the exposition is repetitive and could benefit from being broken into more modular units. And there are still places where the logical flow is compromised by being wrapped backwards upon itself with "because" and "indeed" and nested "if-thens", although I have done my best to clean out most of these.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof of $(1)$
Let $v \in \map \ker {\map {p_i} T^{a_i} }$.

Then:














\(\ds \map {\map {p_i} T^{a_i} } {\map T v}\)

\(=\)







\(\ds \map T {\map {\map {p_i} T^{a_i} } v}\)





because $\map {p_i} T^{a_i} \circ T = T \circ \map {p_i} T^{a_i}$














\(\ds \)

\(=\)







\(\ds \map T 0\)





because $v \in \map \ker {\map {p_i} T^{a_i} } \iff \map {\map {p_i} T^{a_i} } v = 0$














\(\ds \)

\(=\)







\(\ds 0\)





where $0$ is the zero vector in $V$ (if $T$ is any linear transformation, then $\map T 0 = 0$)



This shows that:

$\map T v \in \map \ker {\map {p_i} T^{a_i} }$
for all $v \in \map \ker {\map {p_i} T^{a_i} }$.
This is because $v$ was first arbitrary in $\map \ker {\map {p_i} T^{a_i} }$.
That is:

$\map \ker {\map {p_i} T^{a_i} }$
is a $T$-invariant subspace of $V$.
$\blacksquare$


Proof of $(2)$
Proof by induction on $r$:
For all $r \in \Z_{\ge 1}$, let $\map P r$ be the proposition:

$V = \ds \bigoplus_{i \mathop = 1}^r \map \ker {\map {p_i} T^{a_i} }$
where $\map {p_i} x^{a_i}$ for $i = 1, 2, \dotsc, r$ satisfy the hypotheses of the theorem.
$V$ and $T$ are arbitrary.


Basis for the Induction
We have:














\(\ds \map p T\)

\(=\)







\(\ds c \map {p_1} T^{a_1}\)




















\(\ds \)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map {p_1} T^{a_1}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds V\)

\(=\)







\(\ds \map \ker {\map {p_1} T^{a_1} }\)









Thus $\map P 1$ holds.
This is our basis for the induction


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.
So this is our induction hypothesis:

$V = \ds \bigoplus_{i \mathop = 1}^{k - 1} \map \ker {\map {p_i} T^{a_i} }$
where $\map {p_i} x^{a_i}$ for $i = 1, 2, \dotsc, r$ satisfy the hypotheses of the theorem.
$V$ and $T$ are arbitrary.

Then we need to show:

$V = \ds \bigoplus_{i \mathop = 1}^k \map \ker {\map {p_i} T^{a_i} }$


Induction Step
Suppose we meet the hypotheses of the theorem when $r = k$.
Then:

$\map p x \in K \sqbrk x$
is a polynomial such that:

$\map \deg p \ge 1$
$\map p T = 0$
$\map p x = c \map {p_1} x^{a_1} \map {p_2} x^{a_2} \cdots \map {p_k} x^{a_k}$
Let $W := \map \ker {\map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} }$.
First it will be shown that $W$ is a $T$-invariant subspace of $V$.
Let $w \in W$.
Then:














\(\ds \map {\map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} } {\map T w}\)

\(=\)







\(\ds \map T {\map {\map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} } w}\)





by the same argument as in the proof of i), first equality














\(\ds \)

\(=\)







\(\ds \map T 0\)





because $w \in W \iff \map {\map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} } w = 0$














\(\ds \)

\(=\)







\(\ds 0\)





where $0$ is the zero vector in $V$ (if $T$ is any linear transformation, then $\map T 0 = 0$)



This shows that $\map T w \in W$ for all $w \in W$, because $w$ was first arbitrary in $W$.
That is, $W$ is a $T$-invariant subspace of $V$.
So it makes sense to talk about the restriction $T \restriction_W$ of $T$ on $W$.

Now, define:

$\map q x := \map {p_2} x^{a_2} \cdots \map {p_k} x^{a_k}$
Let $w \in W$.
Then:














\(\ds \map {\map q {T \restriction_W} } w\)

\(=\)







\(\ds \map {\map {p_2} {T \restriction_W}^{a_2} \cdots \map {p_k} {T \restriction_W}^{a_k} } w\)




















\(\ds \)

\(=\)







\(\ds \map {\map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} } w\)





because $\map {T \restriction_W} w = \map T w$ for all $w \in W$














\(\ds \)

\(=\)







\(\ds 0\)





because $w \in W \iff \map {p_2} T^{a_2} \cdots \map {\map {p_k} T^{a_k} } w = 0$



Because $w$ was arbitrary in $W$, this shows that $\map q {T \restriction_W} = 0$, where $0$ is the zero operator on $W$.
The hypotheses of the theorem are met.
So, by the induction hypothesis:

$\ds W = \bigoplus_{i \mathop = 2}^k \map \ker {\map {p_i} {T \restriction_W}^{a_i} }$

Now we show that:

$\map \ker {\map {p_i} {T \restriction_W}^{a_i} } = \map \ker {\map {p_i} T^{a_i} }$
for all $i = 2, \dotsc, k$.

Thus, for all $i = 2, \dotsc, k$:














\(\ds \map \ker {\map {p_i} {T \restriction_W}^{a_i} }\)

\(=\)







\(\ds \set {w \in W: \map {\map {p_i} {T \restriction_W}^{a_i} } w = 0}\)




















\(\ds \)

\(=\)







\(\ds \set {w \in W: \map {\map {p_i} T^{a_i} } w = 0}\)




















\(\ds \)

\(\subseteq\)







\(\ds \map \ker {\map {p_i} T^{a_i} }\)




















\(\ds \)

\(=\)







\(\ds \set {v \in V: \map {\map {p_i} T^{a_i} } v = 0}\)










Then:

$\map \ker {\map {p_i} T^{a_i} } \subseteq W$
for all $i = 2, \dotsc, k$.
Let:

$v \in \map \ker {\map {p_j} T^{a_j} }$
where $j \in \set {2, \dotsc, k}$.
Then:














\(\ds \map {\map {p_2} T^{a_2} \cdots \map {p_j} T^{a_j} \cdots \map {p_k} T^{a_k} } v\)

\(=\)







\(\ds \map {\map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} } {\map {\map {p_j} T^{a_j} } v}\)





by the same argument than in the proof of i), first equality














\(\ds \)

\(=\)







\(\ds \map {\map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} } 0\)





because $v \in \map \ker {\map {p_j} T^{a_j} } \iff \map {\map {p_j} T^{a_j} } v = 0$














\(\ds \)

\(=\)







\(\ds 0\)





where $0$ is the zero vector in $V$ (if $T$ is any linear transformation, then $\map T 0 = 0$)




So:

$v \in \map \ker {\map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} } = W$
and:

$\map \ker {\map {p_j} T^{a_j} } \subseteq W$
because $v$ was arbitrary in $\map \ker {\map {p_j} T^{a_j} }$.
So:

$v \in \map \ker {\map {p_i} T^{a_i} } \implies v \in W$
and so:

$\map {\map {p_i} {T \restriction_W}^{a_i} } v = \map {\map {p_i} T^{a_i} } v = 0$
for all $i = 2, \dotsc, k$.

Finally, because $v$ was arbitrary in $\map \ker {\map {p_i} T^{a_i} }$:

$v \in \map \ker {\map {p_i} {T \restriction_W}^{a_i} }$
and:

$\map \ker {\map {p_i} T^{a_i} } \subseteq \map \ker {\map {p_i} {T \restriction_W}^{a_i} }$
for all $i = 2, \dotsc, k$.
This shows that:

$\map \ker {\map {p_i} {T \restriction_W}^{a_i} } = \map \ker {\map {p_i} T^{a_i} }$
for all $i = 2, \dotsc, k$.
So we conclude that:

$\ds W = \bigoplus_{i \mathop = 2}^k \map \ker {\map {p_i} T^{a_i} }$

In order to show that:

$V = \ds \bigoplus_{i \mathop = 1}^k \map \ker {\map {p_i} T^{a_i} }$
we equivalently show that:

$(a): \quad V = W + \map \ker {\map {p_1} T^{a_1} }$
$(b): \quad W \cap \map \ker {\map {p_1} T^{a_1} } = 0$
where $0 = \set 0 \subseteq V$.

Notice that $(b)$ is equivalent to showing that:

$\map \ker {\map {p_1} T^{a_1} } \cap \map \ker {\map {p_i} T^{a_i} } = 0$
for all $i = 2, \dotsc, k$.
In particular, $(b)$ implies this last result, because $\map \ker {\map {p_i} T^{a_i} } \subseteq W$ for all $i = 2, \dotsc, k$.

$(a): \quad$ We have that:

$\map g x := \gcd \set {\map {p_1} x^{a_1}, \map {p_2} x^{a_2} \cdots \map {p_k} x^{a_k} } = 1 \in K$.
Indeed, $\map {p_1} x$ being an irreducible monic polynomial, either $\map g x = 1$ or $\map g x = \map {p_1} x^z$ for some $1 \le z \le a_1$.
But we know that the greatest common divisor of two polynomials divides both of these polynomials.
So we must conclude that $\map g x = 1$ because otherwise we would have $\map {p_1} x = \map {p_i} x$ for some $i \in \set {2, \ldots, k}$.
This is a contradiction with the hypothesis that the $\map {p_i} x$ ($i = 1, 2, \ldots, k$) are all distinct.
So, by Bézout's_Identity for polynomials, we know that:

$\exists \map h x, \map {h_1} x \in K \sqbrk x$
such that:

$1 = \map {h_1} x \map {p_1} x^{a_1} + \map h x \map {p_2} x^{a_2} \cdots \map {p_k} x^{a_k}$
Let $v \in V$.
Then, evaluating the last polynomial equality at $T$, and evaluating the resulting operator at $v$, we obtain:

$v = \map {\map {h_1} T \map {p_1} T^{a_1} } v + \map {\map h T \map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} } v$
Notice that $\map I v = v$ on the left hand side.
But:














\(\ds \map {\map {p_1} T^{a_1} } {\map {\map h T \map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} } v}\)

\(=\)







\(\ds \map {\map h T} {\map {\map {p_1} T^{a_1} \map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} } v}\)





by the same argument as in the proof of $(1)$, first equality














\(\ds \)

\(=\)







\(\ds \map h t \paren {\frac 1 c \map {\map p T} v}\)




















\(\ds \)

\(=\)







\(\ds 0\)





because $\map p T$ is the zero operator on $V$ by hypothesis



So:

$\map h T \map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} \in \map \ker {\map {p_1} T^{a_1} }$
Similarly, we find that:

$\map {\map {p_2} T^{a_2} \map {p_3} T^{a_3} \cdots \map {p_k} T^{a_k} } {\map {\map {h_1} T \map {p_1} T^{a_1} } v} = 0$
and so:

$\map {\map {h_1} T \map {p_1} T^{a_1} } v \in \map \ker {\map {p_2} T^{a_2} \map {p_3} T^{a_3} \cdots \map {p_k} T^{a_k} } = W$
Because $v$ was arbitrary in $V$:

$v = \map {h_1} T \map {p_1} T^{a_1} v + \map h T \map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} v \implies V = W + \map \ker {\map {p_1} T^{a_1} }$

$(b): \quad$ Define:

$S := W \cap \map \ker {\map {p_1} T^{a_1} }$
$M := \set {\map f x \in K \sqbrk x: \map {\map f T} s = 0 \forall s \in S}$
and:

$\map q x := \map \gcd M$
By definition of $W$:

$\map {p_2} x^{a_2} \cdots \map {p_k} x^{a_k} \in M$
As every element of $S$ is also an element of $\map \ker {\map {p_1} T^{a_1} }$:

$\map {p_1} x^{a_1} \in M$
it follows that:

$\map q x \divides \map {p_1} x^{a_1}$
and:

$\map q x \divides \map {p_2} x^{a_2} \dotsm \map {p_k} x^{a_k}$
We know that the greatest common divisor $\map {u_1} x$ of two polynomials $\map {u_2} x$ and $\map {u_3} x$ has the property that:

if a polynomial $\map {u_4} x$ divides both $\map {u_2} x$ and $\map {u_3} x$
then $\map {u_4} x$ must also divide $\map {u_1} x$.
Thus, we must have:

$\map q x \divides \gcd \set {\map {p_1} x^{a_1}, \map {p_2} x^{a_2} \cdots \map {p_k} x^{a_k} } = \map g x = 1$
So:

$\map q x = \map g x = 1$
Bézout's_Identity for polynomials may then be applied to obtain:

$\map q x = 1 = \map {h_1} x \map {p_1} x^{a_1} + \map {h_2} x \map {p_2} x^{a_2} \dotsm \map {p_k} x^{a_k}$
for some $\map {h_1} x, \map {h_2} x \in K \sqbrk x$.
Let $s \in S$.
Then, evaluating the last polynomial equality at $T$, and evaluating the resulting operator at $s$, we obtain, by definition of $M$ and by noticing that the left hand side then becomes $\map I s = s$:

$s = \map {\map {h_1} T \map {p_1} T^{a_1} } s + \map {\map {h_2} T \map {p_2} T^{a_2} \cdots \map {p_k} T^{a_k} } s = 0$
Because $s$ was arbitrary in $S$, it follows that:

$S = W \cap \map \ker {\map {p_1} T^{a_1} } = 0$
$\blacksquare$ 


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Remarks

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Remove these from here and put them into their own pages.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
$V$ need not be of finite dimension, but if it is then we can see $T$ as its matrix in the equations and the notation $T^j$ is then directly related to matrix multiplication.
By definition, when applying $\map p x$ at $T$, one needs to convert constants which may appear in the expression of $\map p x$ into transformations in the following way
For example, if $\map p x = 2 + x$, then $\map p T = 2 I + T$, where $I$ is the identity application $I: V \to V$.
$\map {p_1} x, \map {p_2} x, \dotsc, \map {p_r} x$ are not necessarily of degree $1$.
For example, if $K = \R$ and $\map p x = x^2 + 1$, then $\map p x$ is irreducible on $\R$ and $\map {p_1} x = \map p x$ is of degree $2$.
$T^j \triangleq \begin{cases}
\overbrace {T \circ T \circ \cdots \circ T}^{\text {$j$ times} } & : j \in \Z_{\ge 1} \\
I: V \to V & : j = 0
\end{cases}$


This article, or a section of it, needs explaining.In particular: the meaning of the above statement -- in particular, what does $\triangleq$ mean?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By definition, the greatest common divisor of two polynomials is a monic polynomial.





