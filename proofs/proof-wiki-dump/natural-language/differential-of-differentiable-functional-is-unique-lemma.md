# 

Source: https://proofwiki.org/wiki/Differential_of_Differentiable_Functional_is_Unique/Lemma


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma
Let $\phi \sqbrk {y; h}$ be a linear functional with respect to $h$.
Let:

$\ds \lim_{\size h \mathop \to 0} \frac {\phi \sqbrk {y; h} } {\size h} = 0$

Then:

$\phi \sqbrk {y; h} = 0$


Proof
This will be a Proof by Contradiction.
Aiming for a contradiction, suppose there exists a linear functional satisfying $\phi \sqbrk {y; h_0} \ne 0$ for some $h_0 \ne 0$.
Also suppose:

$\ds \lim_{\size {h_0} \mathop \to 0} \frac{\phi \sqbrk {y; h_0} } {\size {h_0} } = 0$
Now, define:

$h_n = \dfrac {h_0} n$
and:

$m = \dfrac {\phi \sqbrk {y; h_0} } {\size {h_0} }$
Notice that $\size {h_n} \to 0$ as $n \to \infty$. 
Hence, from the assumption of the limit it should hold that:

$\ds \lim_{n \mathop \to \infty} \frac {\phi \sqbrk {y; h_n} } {\size {h_n} } = \lim_{\size {h_n} \mathop \to 0} \frac {\sqbrk {y; h_n} } {\size {h_n} } = 0$
However, using the linearity of $\phi \sqbrk {y; h_0}$ with respect to $h_0$:














\(\ds \lim_{n \mathop \to \infty} \frac {\phi \sqbrk {y; h_n} } {\size {h_n} }\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\phi \sqbrk {y; \frac {h_0} n} } {\size {\frac {h_0} n} }\)





Definition of $h_n$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {n \, \phi \sqbrk {y; h_0} } {n \, \size {h_0} }\)





extract of $n$ through linearity














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\phi \sqbrk {y; h_0} } {\size {h_0} }\)





cancel $n$














\(\ds \)

\(=\)







\(\ds \frac {\phi \sqbrk {y; h_0} } {\size {h_0} }\)





the limit does not depend on $n$














\(\ds \)

\(=\)







\(\ds m\)





definition of $m$



However, by hypothesis:

$m \ne 0$
Hence, the contradiction is achieved and the initial statement of the lemma holds.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations: $\S 1.3$: The Variation of a Functional. A Necessary Condition for an Extremum




