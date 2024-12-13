# 

Source: https://proofwiki.org/wiki/Ideal_is_Dual_of_Filter_(Order_Theory)


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $T \subseteq S$ be a subset of $S$.

The following are dual statements:

$T$ is a filter of $\struct {S, \preceq}$
$T$ is an ideal of $\struct {S, \preceq}$


Proof
By definition of filter:

$T$ is a filter of $\struct {S, \preceq}$
if and only if:




\((1)\)  

$:$  







\(\ds T \ne \O \)   







  


\((2)\)  

$:$  







\(\ds x, y \in T \implies \exists z \in T: z \preccurlyeq x, z \preccurlyeq y \)   







  


\((3)\)  

$:$  







\(\ds \forall x \in T: \forall y \in S: x \preccurlyeq y \implies y \in T \)   







  


By the duality principle, the dual of this statement is:




\((1')\)  

$:$  







\(\ds T \ne \O \)   







  


\((2')\)  

$:$  







\(\ds x, y \in T \implies \exists z \in T: x \preccurlyeq z, y \preccurlyeq z \)   







  


\((3')\)  

$:$  







\(\ds \forall x \in T: \forall y \in S: y \preccurlyeq x \implies y \in T \)   







  


By definition of ideal:

$T$ is an ideal of $\struct {S, \preceq}$
$\blacksquare$





