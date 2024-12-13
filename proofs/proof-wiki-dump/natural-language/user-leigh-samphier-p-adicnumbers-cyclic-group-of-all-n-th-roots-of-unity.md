# 

Source: https://proofwiki.org/wiki/User:Leigh.Samphier/P-adicNumbers/Cyclic_Group_of_All_n-th_Roots_of_Unity


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $n \in \Z_{> 0}$ be a strictly positive integer.

Let $\struct{F,+,\times}$ be a field with zero $0$ and unity $1$.
Let $F^* = F \setminus \set 0$. 

Let $U_n$ denote the $n$-th roots of unity.

Then:

$\struct{U_n, \times \restriction_{U_n}}$ is a cyclic subgroup of $\struct{F^*, \times \restriction_{F^*}}$
Proof
By Definition of Power of Field Element:

$0^n = 0$
Hence:

$0 \notin U_n$
Thus:

$U_n \subseteq F^*$

From Multiplicative Group of Field is Abelian Group:

$\struct{F^*, \times \restriction_{F^*}}$ is an Abelian group

Let $x, y \in U_n$.
We have:














\(\ds \paren{x y^{-1} }^n\)

\(=\)







\(\ds x^n \paren{y^{-1} }^n\)





Common Index Law for Field














\(\ds \)

\(=\)







\(\ds 1 \times \paren{y^{-1} }^n\)





Definition of $n$-th Root of Unity














\(\ds \)

\(=\)







\(\ds \paren{y^{-1} }^n\)





Definition of Unity of Field














\(\ds \)

\(=\)







\(\ds \paren{y^n }^{-1}\)





Negative Index Law for Field














\(\ds \)

\(=\)







\(\ds 1^{-1}\)





Definition of $n$-th Root of Unity














\(\ds \)

\(=\)







\(\ds 1\)









From One-Step Subgroup Test:

$\struct{U_n, \times \restriction_{U_n}}$ is a subgroup of $\struct{F^*, \times \restriction_{F^*}}$
show finite
From Finite Multiplicative Subgroup of Field is Cyclic:
$:\struct{U_n, \times \restriction_{U_n}}$ is a cyclic subgroup of $\struct{F^*, \times \restriction_{F^*}}$
$\blacksquare$





