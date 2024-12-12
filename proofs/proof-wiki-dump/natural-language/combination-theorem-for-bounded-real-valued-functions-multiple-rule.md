# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Bounded_Real-Valued_Functions/Multiple_Rule


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{S, \tau_S}$ be a topological space.
Let $\R$ denote the real number line.
Let $f :S \to \R$ be bounded real-valued function.
Let $\lambda \in \R$.
Let $\lambda f : S \to \R$ be the pointwise scalar multiplication of $f$ by $\lambda$, that is, $\lambda f$ is the mappping defined by:

$\forall s \in S : \map {\paren{\lambda f} } s = \lambda \map f s$

Then:

$\lambda f$ is a bounded real-valued function


Proof
By definition of bounded real-valued function

$\exists M_f \in \R_{\ge 0} : \forall s \in S : \size{\map f s} \le M_f$

Let $M = \size{\lambda} M_f$.

We have:










\(\ds \forall s \in S: \, \)



\(\ds \size{\map {\paren{\lambda f} } s}\)

\(=\)







\(\ds \size{\lambda \map f s}\)





Definition of Pointwise Scalar Multiplication of Real-Valued Function














\(\ds \)

\(=\)







\(\ds \size{\lambda} \size{\map f s}\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds \size{\lambda} M_f\)





Definition of Bounded Real-Valued Function














\(\ds \)

\(=\)







\(\ds M\)





definition of $M$




It follows that $\lambda f$ is a bounded real-valued function by definition.
$\blacksquare$





