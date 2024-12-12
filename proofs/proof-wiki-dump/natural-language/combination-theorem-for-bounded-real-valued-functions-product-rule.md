# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Bounded_Real-Valued_Functions/Product_Rule


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a set.
Let $\R$ denote the real number line.
Let $f, g :S \to \R$ be bounded real-valued functions.
Let $f g : S \to \R$ be the pointwise product of $f$ and $g$, that is, $f g$ is the mappping defined by:

$\forall s \in S : \map {\paren{f g} } s = \map f s \map g s$

Then:

$f g$ is a bounded real-valued function


Proof
By definition of bounded real-valued function

$\exists M_f \in \R_{\ge 0} : \forall s \in S : \size{\map f s} \le M_f$
and

$\exists M_g \in \R_{\ge 0} : \forall s \in S : \size{\map g s} \le M_g$

Let $M = M_f M_g$.

We have:










\(\ds \forall s \in S: \, \)



\(\ds \size{\map {\paren{f g} } s}\)

\(=\)







\(\ds \size{\map f s \map g s}\)





Definition of Pointwise Product














\(\ds \)

\(=\)







\(\ds \size{\map f s} \size{\map g s}\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds M_f M_g\)





Definition of Bounded Real-Valued Function














\(\ds \)

\(=\)







\(\ds M\)





Definition of $M$




It follows that $f g$ is a bounded real-valued function by definition.
$\blacksquare$





