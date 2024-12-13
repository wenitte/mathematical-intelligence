# 

Source: https://proofwiki.org/wiki/Lebesgue_Integral_is_Extension_of_Darboux_Integral


This article needs to be linked to other articles.In particular: Review links to various definitions of IntegralYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $f: \closedint a b \to \R$ be a Darboux integrable function.
Then it is also Lebesgue integrable, and furthermore:

$\ds R \int_a^b \map f x \rd x = \int_{\closedint a b} f \rd \lambda$
where $\ds R \int_a^b$ is the Darboux integral and $\ds \int_{\closedint a b}$ is the Lebesgue integral.


Proof
Since every step function is also a simple function, we have

$\ds \map L P \le \sup_{\phi \mathop \le f} \int_a^b \map \phi x \rd x \le \inf_{\psi \mathop \ge f} \int_a^b \map \psi x \rd x \le \map U P$
where $\map L P$ and $\map U P$ are the lower Darboux sum and upper Darboux sum as defined in the definition of definite integral.

Since $f$ is Darboux integrable, the inequalities are all equalities and $f$ is measurable by basic properties of measurable functions.


The validity of the material on this page is questionable.In particular: all reasoning is behind red links, and it's incompleteYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $11.8 \ \text{(i)}$




