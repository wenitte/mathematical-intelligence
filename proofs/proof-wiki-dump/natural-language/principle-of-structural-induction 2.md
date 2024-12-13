# 

Source: https://proofwiki.org/wiki/Principle_of_Structural_Induction



Theorem
Let $\LL$ be a formal language.
Let the formal grammar of $\LL$ be a bottom-up grammar.
Let $\map P \phi$ be a statement (in the metalanguage of $\LL$) about well-formed formulas $\phi$ of $\LL$.

Then $P$ is true for all WFFs of $\LL$ if and only if both:

$\map P a$ is true for all letters $a$ of $\LL$,
and, for each rule of formation of $\LL$, if $\phi$ is a WFF resulting from WFFs $\phi_1, \ldots, \phi_n$ by applying that rule, then:

$\map P \phi$ is true only if $\map P {\phi_1}, \ldots, \map P {\phi_n}$ are all true.


Proof
Let $\phi$ be a WFF of $\LL$.
Then $\phi$ is the result of applying finitely many rules of formation of $\LL$.
If we can show that the result of each rule of formation satisfies $P$, we will have finished.

Suppose now that for a rule of formation $\mathbf R$, all preceding rules have produced WFFs satisfying $P$.
By the bottom-up nature of the formal grammar of $\LL$, $\mathbf R$ either:

Introduces a letter as a WFF; or
Constructs a new WFF from previously constructed ones.
The two given hypotheses precisely ensure that the WFF resulting from $\mathbf R$ must also satisfy $P$.

For the first rule of formation applied, all preceding rules have vacuously produced WFFs satisfying $P$.
But now we see that any subsequent rule of formation will satisfy this premise.
In particular, it applies to the final rule of formation, and hence $\map P \phi$ is true.
$\blacksquare$


Remark
Although the proof is strongly reminiscent of the Principle of Mathematical Induction, it can be seen to be a finite, algorithmic procedure:

Given any WFF $\phi$, we have a definite procedure for verifying $\map P \phi$, which involves only finitely many operations.
The assumptions of the theorem ensure that each of these operations will affirm the truth of $\map P \phi$.
It is therefore justifiable to accept this proof in the metalanguage.


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.1.4$: Theorem $2.12$




