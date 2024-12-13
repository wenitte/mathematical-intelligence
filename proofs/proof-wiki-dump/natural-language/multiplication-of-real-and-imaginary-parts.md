# 

Source: https://proofwiki.org/wiki/Multiplication_of_Real_and_Imaginary_Parts


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This page has been identified as a candidate for refactoring of basic complexity.In particular: Two results -- or is it 4??Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $w, z \in \C$ be complex numbers.

$(1)$ If $w$ is wholly real, then:

$\map \Re {w z} = w \, \map \Re z$
and:

$\map \Im {w z} = w \, \map \Im z$

$(2)$ If $w$ is wholly imaginary, then:

$\map \Re {w z} = -\map \Im w \, \map \Im z$
and:

$\map \Im {w z} = \map \Im w \, \map \Re z$

Here, $\map \Re z$ denotes the real part of $z$, and $\map \Im z$ denotes the imaginary part of $z$.


Proof
Assume that $w$ is wholly real.
Then:














\(\ds w z\)

\(=\)







\(\ds \map \Re w \, \map \Re z - \map \Im w \, \map \Im z + i \paren {\map \Re w \, \map \Im z + \map \Im w \, \map \Re z}\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds w \, \map \Re z + i w \, \map \Im z\)





as $\map \Re w = w$ and $\map \Im w = 0$



This equation shows that $\map \Re {w z} = w \, \map \Re z$, and $\map \Im {w z} = w \, \map \Im z$.
This proves $(1)$.

Now, assume that $w$ is wholly imaginary.
Then:














\(\ds w z\)

\(=\)







\(\ds \map \Re w \, \map \Re z - \map \Im w \, \map \Im z + i \paren {\map \Re w \, \map \Im z + \map \Im w \, \map \Re z}\)




















\(\ds \)

\(=\)







\(\ds -\map \Im w \, \map \Im z) + i \, \map \Im w \, \map \Re z\)





as $\map \Re w = 0$



This equation shows that $\map \Re {w z} = -\map \Im w \, \map \Im z$, and $\map \Im {w c} = \map \Im w \, \map \Re z$.
This proves $(2)$.
$\blacksquare$





