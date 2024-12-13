# 

Source: https://proofwiki.org/wiki/Infinitely_Many_Programs_for_URM_Computable_Function


This page has been identified as a candidate for refactoring of medium complexity.In particular: Extract the note which explains what "incrementing the jumps" is and put it into its own page - because this technique is used in several pages in this area.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $g: \N^k \to \N$ be a URM computable function.
Then there is an infinite number of URM programs which compute $g$.


Proof
As $g$ is URM computable, there exists a URM program which computes it.
Let $Q$ be such a program.
Let $n \in \N$.
Increment the Jumps in $Q$ by $n$ lines[1]. Call this amended version $Q'$.
This is because, as $Q$ was written so as to start from line 1, we need to move all the Jumps so as to point to the same lines relative to the start of $Q'$.
Then we can build the following URM program:




Line


Command


$1$


$C \left({1, 1}\right)$


$2$


$C \left({1, 1}\right)$


$\vdots$


$\vdots$


$n$


$C \left({1, 1}\right)$


$n + 1$


The start of $Q'$

...etc.
Each of the $C \left({1, 1}\right)$ instructions codes the identity function.
So adding it to the front of $Q$ has no effect on the behaviour of $Q$
It is clear that for each $n \in \N$ there is a different URM program which computes $f$.
The result follows from Infinite if Injection from Natural Numbers.
$\blacksquare$


Notes

↑ To increment the Jumps by $r$ for any normalized URM program is done by changing all Jumps of the form $J \left({m, n, q}\right)$ to $J \left({m, n, q+r}\right)$.






