# 

Source: https://proofwiki.org/wiki/Max_Operation_Preserves_Total_Ordering


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {S, \preceq}$ be a totally ordered set.
Let $a, b, c, d \in S$:

$a \preceq b, c \preceq d$

Then:

$\max \set{a, c} \preceq \max \set{b, d}$
where $\max$ denotes the max operation on $\struct {S, \preceq}$.


Proof
From Max Operation Equals an Operand, either:

$\max \set{a, c} = a$
or

$\max \set{a, c} = c$

Without loss of generality, suppose:

$\max \set{a, c} = a$

We have:














\(\ds \max \set{a, c}\)

\(=\)







\(\ds a\)





by hypothesis














\(\ds \)

\(\preceq\)







\(\ds b\)





by hypothesis














\(\ds \)

\(\preceq\)







\(\ds \max \set{b, d}\)





Max Operation Yields Supremum of Parameters and Definition of Supremum




By transitivity of an ordering:

$\max \set{a, c} \preceq \max \set{b, d}$
$\blacksquare$





