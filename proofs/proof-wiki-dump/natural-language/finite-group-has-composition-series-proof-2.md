# 

Source: https://proofwiki.org/wiki/Finite_Group_has_Composition_Series/Proof_2

Theorem
Let $G$ be a finite group.

Then $G$ has a composition series.


Proof

Work In ProgressIn particular: Bring up to site standardsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Let $G$ be a finite group whose identity is $e_G$.
We shall use induction on $|G|$.  
If $G$ is trivial ($|G|=1$), then its composition series is 

$G=\{e_G\}$.
Suppose $G$ has a composition series if $|G|<n$, then it suffices to construct a composition series for $G$ with order $n$. 
If $G$ is simple, then its composition series is 

$G\supsetneq \{e_G\}$.
Otherwise, $G$ has one or more proper non-trivial normal subgroup. Let $S$ denote the set of all non-trivial normal proper subgroup of $G$. 
Notice that $S$ is non-empty, ordered by inclusion, and $G$ is an upper bound of every chain in $S$, then by Zorn's lemma, $S$ has at least one maximal element, denoted $H$. 
Since $H\in S$, $H$ is a non-trivial normal proper subgroup of $G$, in particular, $|H|<|G|$, so by the induction hypothesis, $H$ has a composition series. 
Now we have 

$G\supsetneq H\supsetneq H_1\supsetneq \cdots \supsetneq H_n\supsetneq \{e_G\}$.
In order to show that it is indeed a composition series of $G$, it suffices to check that $G/H$ is simple, which is a direct consequence of the maximal property of $H$, so we are done. 
$\blacksquare$





