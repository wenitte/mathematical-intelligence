# 

Source: https://proofwiki.org/wiki/Hilbert_Space_Direct_Sum_is_Hilbert_Space



Theorem
Let $\sequence {H_i}_{i \mathop \in I}$ be a $I$-indexed family of Hilbert spaces over $\Bbb F \in \set {\R, \C}$.
Let $H = \ds \bigoplus_{i \mathop \in I} H_i$ be their Hilbert space direct sum.

Then $H$ is a Hilbert space.


Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

Work In ProgressIn particular: I think some of the partial results are up on their own pages now, and thus can be replaced by a reference (or this should become the case).
Furthermore, this is *so* long, transclusions and/or foldable templates are a mustYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
$H$ is a Vector Space
From the definition of Hilbert space direct sum, we see that $H$ is a nonempty subset of a vector space (namely, the direct sum of the $H_i$ as vector spaces).
From the Two-Step Vector Subspace Test it follows that it is to be shown that:

$(1): \quad \forall h_1, h_2 \in H: \ds \sum \set {\norm {\map {\paren {h_1 + h_2} } i}^2_{H_i}: i \in I} < \infty$
$(2): \quad \forall \lambda \in \Bbb F, h \in H: \ds \sum \set {\norm {\map {\paren {\lambda h} } i}^2_{H_i}: i \in I } < \infty$

Considering $(1)$, have the following:














\(\ds \norm {\map {\paren {h_1 + h_2} } i}^2_{H_i}\)

\(=\)







\(\ds \norm {\map {h_1} i + \map {h_2} i}^2_{H_i}\)




















\(\ds \)

\(\le\)







\(\ds \paren {\norm {\map {h_1} i}_{H_i} + \norm {\map {h_2} i}_{H_i} }^2\)





Triangle inequality for $\norm {\, \cdot \,}_{H_i}$








\(\ds \leadsto \ \ \)





\(\ds \sum \set {\norm {\map {\paren {h_1 + h_2} } i}^2_{H_i}: i \in I}\)

\(\le\)







\(\ds \sum \set {\paren {\norm {\map {h_1} i}_{H_i} + \norm {\map {h_2} i}_{H_i} }^2: i \in I}\)





Generalized Sum Preserves Inequality














\(\ds \)

\(<\)







\(\ds \infty\)





$h_1, h_2 \in H$, Square-Summable Indexed Sets Closed Under Addition




For $(2)$, observe that:














\(\ds \norm {\map {\paren {\lambda h} } i}^2_{H_i}\)

\(=\)







\(\ds \size \lambda^2 \norm {\map h i}^2_{H_i}\)





$\norm {\, \cdot \,}_{H_i}$ is a norm








\(\ds \leadsto \ \ \)





\(\ds \sum \set {\norm {\map {\paren {\lambda h} } i}^2_{H_i}: i \in I}\)

\(\le\)







\(\ds \size \lambda^2 \sum set {\norm {\map h i}^2_{H_i}: i \in I}\)





Generalized Sum is Linear














\(\ds \)

\(<\)







\(\ds \infty\)





As $h \in H$



Thus, by the Two-Step Vector Subspace Test, $H$ is a vector space.
$\Box$


$\innerprod \cdot \cdot$ is an Inner Product
It suffices to check well-definedness of $\innerprod \cdot \cdot$, and subsequently the five properties of an inner product.


Well-definedness
It is necessary to verify that for $g, h \in H$, in fact $\innerprod g h \in \Bbb F$.
That is, it is required to show that $\innerprod g h = \ds \sum \set {\innerprod {\map g i} {\map h i}_{H_i}: i \in I}$ converges in $\Bbb F$.

Absolutely Convergent Generalized Sum Converges applies to the Banach space $\Bbb F$ and the $I$-indexed subset $\innerprod {\map g i} {\map h i}_{H_i}$ of $\Bbb F$.
Hence it will suffice to show that $\ds \sum \set {\size {\innerprod {\map g i} {\map h i}_{H_i} }: i \in I}$ converges in $\R$.
For brevity, denote already $\norm h^2$ for the expression $\ds \sum \set {\norm {\map h i}_{H_i}^2: i \in I}$.

Define $g' \in H$ by:

$\map {g'} i = \begin{cases}
  \map g i & \text{if } \norm {\map g i}_{H_i} \ge \norm {\map h i}_{H_i} \\
  \mathbf 0_{H_i} & \text{otherwise}
\end{cases}$
Note that $\norm {g'}^2 \le \norm g^2$ by Generalized Sum Preserves Inequality.

Similarly, let $h' \in H$ be defined by:

$\map {h'} i = \begin{cases}
  \map h i & \text{if } \norm {\map h i}_{H_i} > \norm {\map g i}_{H_i} \\
  \mathbf 0_{H_i} & \text{otherwise}
\end{cases}$

By Generalized Sum Preserves Inequality again, we have:

$\norm {h'}^2 \le \norm h^2$
More significantly, by construction of $g', h'$:

$(3): \quad \norm {\map g i}_{H_i}, \norm {\map h i}_{H_i} \le \norm {\map {\paren {g' + h'} } i}_{H_i}$
As $H$ is a vector space, $g' + h' \in H$, and we can establish:














\(\ds \size {\innerprod {\map g i} {\map h i}_{H_i} }\)

\(\le\)







\(\ds \norm {\map g i}_{H_i} \norm {\map h i}_{H_i}\)





Cauchy-Bunyakovsky-Schwarz Inequality for Inner Product Spaces














\(\ds \)

\(\le\)







\(\ds \norm {\map {\paren {g' + h'} } i}_{H_i}^2\)





Equation $(3)$








\(\ds \leadsto \ \ \)





\(\ds \sum \set {\size {\innerprod {\map g i} {\map h i}_{H_i} }: i \in I}\)

\(\le\)







\(\ds \sum \set {\norm {\map {\paren {g' + h'} } i}_{H_i}^2: i \in I}\)





Generalized Sum Preserves Inequality



Hence, for all $g, h \in H$, $\innerprod g h \in \Bbb F$ by the comment on Generalized Sum Preserves Inequality.
$\Box$


Property 1: $\innerprod g h = \overline {\innerprod h g}$













\(\ds \innerprod g h\)

\(=\)







\(\ds \sum \set {\innerprod {\map g i} {\map h i}_{H_i}: i \in I}\)





Definition of $\innerprod \cdot \cdot$














\(\ds \)

\(=\)







\(\ds \sum \set {\overline {\innerprod {\map h i} {\map g i}_{H_i} }: i \in I}\)





$\innerprod \cdot \cdot_{H_i}$ is an inner product














\(\ds \)

\(=\)







\(\ds \overline{ \sum \set {\innerprod {\map h i} {\map g i}_{H_i}: i \in I} }\)





Convergence of Generalized Sum of Complex Numbers: Corollary














\(\ds \)

\(=\)







\(\ds \overline {\innerprod h g}\)





Definition of $\innerprod \cdot \cdot$



$\Box$


Property 2: $\innerprod {\lambda g} h = \lambda \innerprod g h$













\(\ds \innerprod {\lambda g} h\)

\(=\)







\(\ds \sum \set {\innerprod {\map {\paren {\lambda g} } i} {\map h i}_{H_i}: i \in I}\)





Definition of $\innerprod \cdot \cdot$














\(\ds \)

\(=\)







\(\ds \sum \set {\lambda \innerprod {\map g i} {\map h i}_{H_i}: i \in I}\)





$\innerprod \cdot \cdot_{H_i}$ is an inner product














\(\ds \)

\(=\)







\(\ds \lambda \sum \set {\innerprod {\map g i} {\map h i}_{H_i}: i \in I}\)





Generalized Sum is Linear














\(\ds \)

\(=\)







\(\ds \lambda \innerprod h g\)





Definition of $\innerprod \cdot \cdot$



$\Box$


Property 3: $\innerprod {g_1 + g_2} h = \innerprod {g_1} h + \innerprod {g_2} h$













\(\ds \innerprod {g_1 + g_2} h\)

\(=\)







\(\ds \sum \set {\innerprod {\map {\paren {g_1 + g_2} } i} {\map h i}_{H_i}: i \in I}\)





Definition of $\innerprod \cdot \cdot$














\(\ds \)

\(=\)







\(\ds \sum \set {\innerprod {\map {g_1} i} {\map h i}_{H_i} + \innerprod {\map {g_2} i} {\map h i}_{H_i}: i \in I}\)





$\innerprod \cdot \cdot_{H_i}$ is an inner product














\(\ds \)

\(=\)







\(\ds \sum \set {\innerprod {\map {g_1} i} {\map h i}_{H_i}: i \in I} + \sum \set {\innerprod {\map {g_2} i} {\map h i}_{H_i}: i \in I}\)





Generalized Sum is Linear














\(\ds \)

\(=\)







\(\ds \innerprod {g_1} h + \innerprod {g_1} h\)





Definition of $\innerprod \cdot \cdot$



$\Box$


Property 4: $\innerprod h h \ge 0$













\(\ds \innerprod h h\)

\(=\)







\(\ds \sum \set {\innerprod {\map h i} {\map h i}_{H_i}: i \in I}\)





Definition of $\innerprod \cdot \cdot$














\(\ds \)

\(\ge\)







\(\ds \sum \set {0: i \in I}\)





$\innerprod \cdot \cdot_{H_i}$ is an inner product, Generalized Sum Preserves Inequality














\(\ds \)

\(=\)







\(\ds 0\)









$\Box$


Property 5: $\innerprod h h = 0$ if and only if $h = \mathbf 0_H$













\(\ds \innerprod h h\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i \in I: \, \)



\(\ds \innerprod {\map h i} {\map h i}_{H_i}\)

\(=\)







\(\ds 0\)





$\innerprod \cdot \cdot_{H_i}$ is an inner product, Generalized Sum is Monotone








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i \in I: \, \)



\(\ds \map h i\)

\(=\)







\(\ds \mathbf 0_{H_i}\)





$\innerprod \cdot \cdot_{H_i}$ is an inner product








\(\ds \leadstoandfrom \ \ \)





\(\ds h\)

\(=\)







\(\ds \mathbf 0_H\)









$\Box$


Conclusion
$\innerprod \cdot \cdot$ is checked to be a mapping from $H \times H$ to $\Bbb F$, satisfying the five conditions for an inner product.
That is, $\innerprod \cdot \cdot$ is an inner product on $H$.
$\Box$


$H$ is complete
A Hilbert space is a complete inner product space.
Thus, it remains to verify that $H$ is complete.

Suppose $\sequence {h_n}_{n \mathop \in \N}$ is a Cauchy sequence in $H$.
Let $N \in \N$ such that $n, m \ge N \implies \size {h_n - h_m} < \epsilon$.
That is:

$\ds \sum \set {\norm {\map {\paren {h_n - h_m} } i}_{H_i}^2: i \in I} < \epsilon^2$.
From Generalized Sum is Monotone obtain that, for all $i \in I$:

$\norm {\map {\paren {h_n - h_m} } i}_{H_i}^2 < \epsilon^2$
It follows that $\sequence {\map {h_n} i}_{n \mathop \in \N}$ is a Cauchy sequence in $H_i$.
$H_i$ is a Hilbert space, hence complete.
Hence there is some $h_i \in H_i$ such that $\ds \lim_{n \mathop \to \infty} \map {h_n} i = h_i$.

Now let $h$ be defined by $\map h i = h_i$; it is the only candidate for $\ds \lim_{n \mathop \to \infty} h_n = h$.
It remains to be shown that indeed $\ds \lim_{n \mathop \to \infty} h_n = h$, and then that $h \in H$.
So, for any $\epsilon > 0$, an $N \in \N$ is to be found such that for all $n \ge N$:

$(4): \quad \ds \sum \set {\norm {\map {\paren {h_n - h} } i}_{H_i}^2: i \in I} < \epsilon^2$

To this end, let $N \in \N$ be such that:

$(5): \quad n, m \ge N \implies \size {h_n - h_m}^2 < \frac {\epsilon^2} 2$
Such an $N$ exists as $\sequence {h_n}_{n \mathop \in \N}$ is a Cauchy sequence.
Now observe that, for any finite $G \subseteq I$ and $n \ge N$:










\(\ds \forall i \in I: \, \)



\(\ds \norm {\map {\paren {h_n - h} } i}_{H_i}^2\)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \norm {\map {\paren {h_n - h_m} } i}_{H_i}^2\)





Definition of $\map h i$








\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop \in G} \norm {\map {\paren {h_n - h} } i}_{H_i}^2\)

\(=\)







\(\ds \sum_{i \mathop \in G} \lim_{m \mathop \to \infty} \norm {\map {\paren {h_n - h_m} } i}_{H_i}^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \sum_{i \mathop \in G} \norm {\map {\paren {h_n - h_m} } i}_{H_i}^2\)





Sum Rule for Sequences














\(\ds \)

\(\le\)







\(\ds \lim_{m \mathop \to \infty} \sum \set {\norm {\map {\paren {h_n - h_m} } i}_{H_i}^2 : i \in I}\)





Generalized Sum is Monotone














\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \size {h_n - h_m}^2\)





Definition of $\norm {\, \cdot \,}$














\(\ds \)

\(\le\)







\(\ds \frac {\epsilon^2} 2\)





Upper and Lower Bounds of Sequences



The last inequality follows from $(5)$, as $m \ge N$ eventually when $m \to \infty$. 

From Bounded Generalized Sum Converges, it now follows that:

$\ds \sum \set {\norm {\map {\paren {h_n - h} } i}_{H_i}^2 : i \in I} \le \frac {\epsilon^2} 2 < \epsilon^2$
This precisely establishes the inequality desired in $(4)$ for $n \ge N$.
It follows that $\ds \lim_{n \mathop \to \infty} h_n = h$.

To show that $h \in H$, it is to be shown that $\norm h^2 < \infty$.
This is done as follows:














\(\ds \norm h^2\)

\(=\)







\(\ds \sum \set {\norm {\map h i}_{H_i}^2 : i \in I}\)





Definition of $\norm {\, \cdot \,}$














\(\ds \)

\(\le\)







\(\ds \sum \set {\paren {\norm {\map {\paren {h - h_n} } i}_{H_i} + \norm {\map {h_n} i}_{H_i} }^2 : i \in I}\)





Triangle Inequality for all $\norm {\, \cdot \,}_{H_i}$, Generalized Sum Preserves Inequality



The latter sum converges by Square-Summable Indexed Sets Closed Under Addition, yielding convergence of $\norm h^2$.
Therefore, $h \in H$.

That is, every Cauchy sequence in $H$ converges to a limit in $H$, hence $H$ is complete.
By definition, $H$ is a Hilbert space.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\S I.6$




