# 

Source: https://proofwiki.org/wiki/User:Leigh.Samphier/P-adicNumbers/Group_of_All_Roots_of_Unity


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $n \in \Z_{> 0}$ be a strictly positive integer.

Let $\struct{F,+,\times}$ be a field with zero $0$ and unity $1$.
Let $F^* = F \setminus \set 0$. 

Let $U$ denote the set of all roots of unity.
That is, $U = \set{x \in F : \exists n \in \Z_{>0} : x^n = 1}$

Then:

$\struct{U, \times \restriction_U}$ is a subgroup of $\struct{F^*, \times \restriction_{F^*}}$
Proof
By Definition of Power of Field Element:

$0^n = 0$
Hence:

$0 \notin U_n$
Thus:

$U_n \subseteq F^*$

From Multiplicative Group of Field is Abelian Group:

$\struct{F^*, \times \restriction_{F^*}}$ is an Abelian group

Let $x, y \in U$.
By Definition of Root of Unity:

$\exists n, m \in \Z_{>0} : x^n = y^m = 1$
We have:














\(\ds \paren{x y^{-1} }^{nm}\)

\(=\)







\(\ds x^{nm} \paren{y^{-1} }^{nm}\)





Common Index Law for Field














\(\ds \)

\(=\)







\(\ds 1 \times \paren{y^{-1} }^{nm}\)





Integer Power of Root of Unity is Root of Unity














\(\ds \)

\(=\)







\(\ds \paren{y^{-1} }^{nm}\)





Definition of Unity of Field














\(\ds \)

\(=\)







\(\ds \paren{y^{nm} }^{-1}\)





Negative Index Law for Field














\(\ds \)

\(=\)







\(\ds 1^{-1}\)





Integer Power of Root of Unity is Root of Unity














\(\ds \)

\(=\)







\(\ds 1\)









From One-Step Subgroup Test:

$\struct{U, \times \restriction_U}$ is a subgroup of $\struct{F^*, \times \restriction_{F^*}}$
$\blacksquare$





