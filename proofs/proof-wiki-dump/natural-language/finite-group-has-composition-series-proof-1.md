# 

Source: https://proofwiki.org/wiki/Finite_Group_has_Composition_Series/Proof_1

Theorem
Let $G$ be a finite group.

Then $G$ has a composition series.


Proof
Let $G$ be a finite group whose identity is $e$.
Either $G$ has a proper non-trivial normal subgroup or it does not.
If not, then:

$\set e \lhd G$
is the composition series for $G$.
Otherwise, $G$ has one or more proper non-trivial normal subgroup.
Of these, one or more will have a maximum order.
Select one of these and call it $G_1$.
Again, either $G_1$ has a proper non-trivial normal subgroup or it does not.
If not, then:

$\set e \lhd G_1 \lhd G$
is a composition series for $G$.
By the Jordan-Hölder Theorem, there can be no other composition series which is longer.
As $G_1$ is a proper subgroup of $G$:

$\order {G_1} < \order G$
where $\order G$ denotes the order of $G$.
Again, if $G_1$ has one or more proper non-trivial normal subgroup, one or more will have a maximum order.
Select one of these and call it $G_2$.
Thus we form a normal series:

$\set e \lhd G_2 \lhd G_1 \lhd G$

The process can be repeated, and at each stage a normal subgroup is added to the series of a smaller 
order than the previous one.
This process cannot continue infinitely.
Eventually a $G_n$ will be encountered which has no proper non-trivial normal subgroup.


This needs considerable tedious hard slog to complete it.In particular: Proof or explanation is required for why the repeated process cannot continue indefinitely. In particular, explain why eventually there will be no non-trivial normal subgroupSeriously? You need it explained why reducing the size of a finite number cannot go on for ever>?To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus a composition series:

$\set e \lhd G_n \cdots \lhd G_2 \lhd G_1 \lhd G$
will be the result.
$\blacksquare$


Sources
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $1$: Introduction to Finite Group Theory: $1.8$




