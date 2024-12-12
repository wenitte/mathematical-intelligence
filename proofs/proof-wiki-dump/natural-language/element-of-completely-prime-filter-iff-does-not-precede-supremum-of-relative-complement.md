# 

Source: https://proofwiki.org/wiki/Element_of_Completely_Prime_Filter_iff_Does_not_Precede_Supremum_of_Relative_Complement


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct{L, \preceq}$ be a complete lattice.
Let $p$ be a completely prime filter $p$ of $L$.
Let $a \in L$.

Then:

$a \in p$
if and only if:

$a \npreceq \bigvee \paren{L \setminus p}$
where:

$L \setminus p$ denotes the relative complement of $p$ in $L$
$\bigvee \paren{L \setminus p}$ denotes the supremum of $L \setminus p$


Proof
Necessary Condition
We show the contrapositive statement:

$a \preceq \bigvee \paren{L \setminus p} \implies a \notin p$

Let:

$a \preceq \bigvee \paren{L \setminus p}$

By definition of completely prime filter:

$\bigvee \paren{L \setminus p} \in L \setminus p$

By definition of relative complement:

$\bigvee \paren{L \setminus p} \notin p$

By definition of filter:

$a \notin p$
$\Box$


Sufficient Condition
Let:

$a \npreceq \bigvee \paren{L \setminus p}$

By definition of supremum:

$a \notin L \setminus p$

By definition of relative complement:

$a \in p$
$\blacksquare$





