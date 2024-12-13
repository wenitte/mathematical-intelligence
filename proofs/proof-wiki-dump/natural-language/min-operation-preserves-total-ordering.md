# 

Source: https://proofwiki.org/wiki/Min_Operation_Preserves_Total_Ordering


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {S, \preceq}$ be a totally ordered set.
Let $a, b, c, d \in S$:

$a \preceq b, c \preceq d$

Then:

$\min \set{a, c} \preceq \min \set{b, d}$
where $\min$ denotes the min operation on $\struct {S, \preceq}$.


Proof
From Min Operation Equals an Operand, either:

$\min \set{b, d} = b$
or

$\min \set{b, d} = d$

Without loss of generality, suppose:

$\min \set{b, d} = b$

We have:














\(\ds \min \set{a, c}\)

\(\preceq\)







\(\ds a\)





Min Operation Yields Infimum of Parameters and Definition of Infimum














\(\ds \)

\(\preceq\)







\(\ds b\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \min \set{b, d}\)





by hypothesis




By transitivity of an ordering:

$\min \set{a, c} \preceq \min \set{b, d}$
$\blacksquare$





