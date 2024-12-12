# 

Source: https://proofwiki.org/wiki/Differential_of_Differentiable_Functional_is_Unique



Theorem
The differential of a differentiable functional is unique.


Proof
Lemma
Let $\phi \sqbrk {y; h}$ be a linear functional with respect to $h$.
Let:

$\ds \lim_{\size h \mathop \to 0} \frac {\phi \sqbrk {y; h} } {\size h} = 0$

Then:

$\phi \sqbrk {y; h} = 0$
$\Box$

Let $J \sqbrk y$ be a differentiable functional.
Suppose the differential of $J \sqbrk y$ is not uniquely defined. 
Then at least $2$ different forms of this exist:

$\Delta J \sqbrk {y; h} = \phi_1 \sqbrk {y; h} + \epsilon_1 \size h$
$\Delta J \sqbrk {y; h} = \phi_2 \sqbrk {y; h} + \epsilon_2 \size h$
where:

$\phi_1 \sqbrk {y; h}$ and $\phi_2 \sqbrk {y; h}$ are linear functionals
$\epsilon_1, \epsilon_2 \to 0$ as $\size h \to 0$.
Because $\size h \to 0$, the whole expression $\to 0$ faster than $\size h$ due to constraints on $\epsilon$.


This article contains statements that are justified by handwavery.In particular: the above statementYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence $\epsilon_1 \size h$, $\epsilon_2 \size h$ and $\paren {\epsilon_1 - \epsilon_2} \size h$ are all infinitesimals of order higher than $1$ relative to $\size h$.
Consequently, subtraction of one from the other leads to:

$(1): \quad \phi_1 \sqbrk {y; h} - \phi_2 \sqbrk {y; h} = \paren {\epsilon_2 - \epsilon_1} \size h$
Therefore, $\phi_1 \sqbrk {y; h} - \phi_2 \sqbrk {y; h}$ is an infinitesimal of order higher than $1$ relative to $\size h$.
Since each of the members are linear functionals, the whole term keeps the same property. 
Rearranging the terms of $(1)$:

$\dfrac {\phi_1 \sqbrk {y; h} - \phi_2 \sqbrk {y; h} } {\size h} = \epsilon_2 - \epsilon_1$
Taking the limit and recalling the constraint on both $\epsilon_1$ and $\epsilon_2$:


This article, or a section of it, needs explaining.In particular: "recalling the constraint on both $\epsilon_1$ and $\epsilon_2$" needs to be more explicitYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\ds \lim_{\size h \mathop \to 0} \frac {\phi_1 \sqbrk {y; h} - \phi_2 \sqbrk {y; h} } {\size h} = 0$
The given limit with the linearity of the term in the numerator allows us to use the lemma. 


This article, or a section of it, needs explaining.In particular: Demonstrate linearityYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence:

$\phi_1 \sqbrk {y; h} - \phi_2 \sqbrk {y; h} = 0$
That is, there is only one form the differential of a differentiable functional can take.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations: $\S 1.3$: The Variation of a Functional. A Necessary Condition for an Extremum




