# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Integrals/Definite/Proof_1

Theorem
$\ds \int_a^b \paren {\lambda \map f t + \mu \map g t} \rd t = \lambda \int_a^b \map f t \rd t + \mu \int_a^b \map g t \rd t$


Proof
Let $F$ and $G$ be primitives of $f$ and $g$ respectively on $\closedint a b$.
By Linear Combination of Derivatives, $H = \lambda F + \mu G$ is a primitive of $\lambda f + \mu g$ on $\closedint a b$.
Hence by the Fundamental Theorem of Calculus:














\(\ds \int_a^b \paren {\lambda \map f t + \mu \map g t} \rd t\)

\(=\)







\(\ds \bigintlimits {\lambda \map F t + \mu \map G t} a b\)




















\(\ds \)

\(=\)







\(\ds \lambda \bigintlimits {\map F t} a b + \mu \bigintlimits {\map G t} a b\)




















\(\ds \)

\(=\)







\(\ds \lambda \int_a^b \map f t \rd t + \mu \int_a^b \map g t \rd t\)









$\blacksquare$



There is believed to be a mistake here, possibly a typo.In particular: This proof relies on $f, g$ being continuous, but they're only given to be integrableThat is originally how this result started out. This page is the proof given in Binmore which has as its premise that $f$ is continuous. The statement was changed by someone back in $2012$ who decided to rewrite a lot of this stuff, and it's only now that I've noticed he changed "continuous" to "integrable". This highlights why we fight hard against editors changing a statement of a result to something different (because it's more general, or whatever) rather than writing a new page with a new statement on it. Nightmare. Going to take ages to get to the bottom of it and work out how to rewrite all this to make it consistent again. I really really hate clever people.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.20$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1967: Tom M. Apostol: Calculus Volume 1: $\S 1.4$




