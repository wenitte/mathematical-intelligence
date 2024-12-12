# 

Source: https://proofwiki.org/wiki/Erd%C5%91s-Moser_Equation


This article needs to be tidied.In particular: Please review existing pages on $\mathsf{Pr} \infty \mathsf{fWiki}$ to get a vague handle on how articles are structured and styled on $\mathsf{Pr} \infty \mathsf{fWiki}$. For a start, you may want ot read the house style guide, accessed via a link which you will find on your talk page.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.In particular: including categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
The Erdős-Moser Equation is the Diophantine equation:














\(\ds \sum_{j \mathop = 1}^k j^p\)

\(=\)







\(\ds 1 + 2^p + 3^p + \cdots + k^p\)




















\(\ds \)

\(=\)







\(\ds \paren {k + 1}^p\)









where $k, p \in \N$.

Its only solution is $k = 2$ and $p = 1$:

$1^1 + 2^1 = 3^1$

The validity of the material on this page is questionable.In particular: This is identified on Wikipedia (hwoever reliable that is) as being unsolved? How certain are we that the above is correct?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof
Let $\map {B_n} x$ denote the $n$th Bernoulli polynomial:

$\ds \map {B_n} x = \sum_{k \mathop = 0}^n \binom n k b_{n - k} x^k$
where $b_n$ denotes the $n$th Bernoulli number.

Lemma 1
Erdös-Moser equation is equivalent:

$(1): \quad \ds \sum_{k \mathop = 0}^x k^p \equiv \dfrac {\map {B_{p + 1} } {x + 1} } {p + 1} = \paren {x + 1}^p$


Proof
By Faulhaber's Formula:

$\ds \sum_{k \mathop = 0}^x k^p = \dfrac {\map {B_{p + 1} } {x + 1} - \map {B_{p + 1} } 0} {p + 1}$

This needs considerable tedious hard slog to complete it.In particular: fill in details, as FF is in a different format from thisTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
It is proved that for another solution of the Erdös-Moser equation $p + 1$ must be odd and $\map {B_{p + 1} } 0$ with odd subscripts is equal to zero.


This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Lemma 2
$(2): \quad \map {B_{p + 1} } {x + 1} - \map {B_p} x = \paren {p + 1} x^p$
$(3): \quad \map {B_{p + 1} } {x + 2} - \map {B_p} {x + 1} = \paren {p + 1} \paren {x + 1}^p$


Proof
General identity involving Bernoulli polynomials:

$\map {B_n} {x + 1} - \map {B_n} x = n x^{n - 1}$

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Lemma 3
$(4): \quad \dfrac {\map {B_{p + 1} } {x + 1} } {\map {B_{p + 1} } x} = \dfrac {\paren {x + 1}^p} {\paren {x + 1}^p - x^p}$


Proof



\(\text {(5)}: \quad\)









\(\ds \dfrac {\map {B_{p + 1} } {x + 1} } {x^p} - \dfrac {\map {B_{p + 1} } x} {x^p}\)

\(=\)







\(\ds p + 1\)





expressing $p + 1$ from $(2)$














\(\ds \map {B_{p + 1} } {x + 1}\)

\(=\)







\(\ds \paren {x + 1}^p \paren {\dfrac {\map {B_{p + 1} } {x + 1} } {x^p} - \dfrac {\map {B_{p + 1} } x} {x^p} }\)





substituting left hand side of $(5)$ for $p + 1$ in $(1)$














\(\ds \dfrac {\map {B_{p + 1} } {x + 1} } {\map {B_{p + 1} } x}\)

\(=\)







\(\ds \dfrac {\paren {x + 1}^p} {\paren {x + 1}^p - x^p}\)





elementary rearrangements



$\Box$


Theorem 1
The Erdös-Moser equation has other solution than $ 1 + 2 = 3$ if and only if:

$(6): \quad \dfrac {\map {B_{p + 1} } {x + 2} } {\map {B_{p + 1} } {x + 1} } = 2$
where $x, p \in \N \land x > 2 \land p > 1$.


Proof



\(\text {(7)}: \quad\)









\(\ds \map {B_{p + 1} } {x + 1}\)

\(=\)







\(\ds \paren {p + 1} \paren {x + 1}^p\)





rearranging $(1)$














\(\ds \map {B_{p + 1} } {x + 2} - \map {B_p} {x + 1}\)

\(=\)







\(\ds \map {B_{p + 1} } {x + 1}\)





equating $(7)$ with $(3)$














\(\ds \dfrac {\map {B_{p + 1} } {x + 2} } {\map {B_{p + 1} } {x + 1} }\)

\(=\)







\(\ds 2\)





elementary rearrangements



$\Box$


Theorem 2
The Erdös-Moser equation has no solution for $p > 1$.


Proof



\(\text {(8)}: \quad\)









\(\ds \dfrac {\map {B_{p + 1} } {x + 2} } {\map {B_{p + 1} } {x + 1} }\)

\(=\)







\(\ds \dfrac {\paren {x + 2}^p} {\paren {x + 2}^p - \paren {x + 1}^p}\)





modification of $(4)$




\(\text {(9)}: \quad\)









\(\ds 2\)

\(=\)







\(\ds \dfrac {\paren {x + 2}^p} {\paren {x + 2}^p - \paren {x + 1}^p}\)





equating RHS of $(6)$ and RHS of $(8)$














\(\ds 2\)

\(=\)







\(\ds \dfrac {\paren {x + 2}^p} {\paren {x + 1}^p}\)





elementary rearrangements of $(9)$














\(\ds \sqrt [p] 2\)

\(=\)







\(\ds \dfrac {x + 2} {x + 1}\)





impossible, since $\sqrt [p] 2$ is for $p > 1$ irrational



The sum of $p$th powers for $p = 1$:














\(\ds \sum_{k \mathop = 0}^x k^1\)

\(=\)







\(\ds \dfrac {\map {B_2} {x + 1} - \map {B_2} 0} 2\)










\(\text {(9)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {x^2 + x} 2\)









To prove this theorem we use $(9)$:














\(\ds \dfrac {x^2 + x} 2\)

\(=\)







\(\ds \paren {x + 1}\)





Erdös-Moser equation, where $p = 1$














\(\ds x^2 - x\)

\(=\)







\(\ds 2\)





elementary rearrangements














\(\ds x\)

\(=\)







\(\ds 2\)










$\blacksquare$


Source of Name
This entry was named for Paul Erdős and Leo Moser.


Sources
1920: E.T. Whittaker and G.N. Watson: A Course of Modern Analysis (3rd ed.): $127$
1953: Leo Moser: On the diophantine equation $1^n + 2^n + 3^n + \dotsb + \paren {m − 1}^n = m^n$ (Scripta Math. Vol. 19: pp. 84 – 88)




