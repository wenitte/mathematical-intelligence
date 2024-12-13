# 

Source: https://proofwiki.org/wiki/Reversion_of_Power_Series

Theorem
Let $\ds y = \sum_{n \mathop = 1}^\infty c_n x^n$ be a power series.

Then:

$\ds x = \sum_{n \mathop = 1}^\infty C_n y^n$
is also a power series, where:














\(\ds c_1 C_1\)

\(=\)







\(\ds 1\)




















\(\ds {c_1}^3 C_2\)

\(=\)







\(\ds -c_2\)




















\(\ds {c_1}^5 C_3\)

\(=\)







\(\ds 2 {c_2}^2 - c_1 c_3\)




















\(\ds {c_1}^7 C_4\)

\(=\)







\(\ds 5 c_1 c_2 c_3 - 5 {c_2}^2 - {c_1}^2 c_4\)




















\(\ds {c_1}^9 C_5\)

\(=\)







\(\ds 6 {c_1}^2 c_2 c_4 + 3 {c_1}^2 {c_3}^2 - {c_1}^3 c_5 + 14 {c_2}^4 - 21 c_1 {c_2}^2 c_3\)




















\(\ds {c_1}^{11} C_6\)

\(=\)







\(\ds 7 {c_1}^3 c_2 c_5 + 84 c_1 {c_2}^3 c_3 + 7 {c_1}^3 c_3 c_4 - 28 {c_1}^2 c_2 {c_3}^2 - {c_1}^4 c_6 - 28 {c_1}^2 {c_2}^2 c_4 - 42 {c_2}^5\)




















\(\ds {c_1}^{13} C_7\)

\(=\)







\(\ds 8 {c_1}^4 c_2 c_6 + 8 {c_1}^4 c_3 c_5 + 4 {c_1}^4 {c_4}^2 + 120 {c_1}^2 {c_2}^3 c_4 + 180 {c_1}^2 {c_2}^2 {c_3}^2 + 132 {c_2}^6 - {c_1}^5 c_7 - 36 {c_1}^3 {c_2}^2 c_5 - 72 {c_1}^3 c_2 c_3 c_4 - 12 {c_1}^3 {c_3}^3 - 330 c_1 {c_2}^4 c_3\)










This article is complete as far as it goes, but it could do with expansion.In particular: How are $C_n$ defined for $n\ge 7$? I am even not able to predicate a general term.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
A derivation of the explicit formula for the $n$th term is given by:

$\ds C_n = \dfrac 1 {n {c_1}^n} \sum_{s, t, u, \cdots} \paren {-1}^{s + t + u + \cdots} \dfrac {n \paren {n + 1} \cdots \paren {n - 1 + s + t + u + \cdots} } {s! \, t! \, u! \ldots} \paren {\dfrac {c_2} {c_1} }^s \paren {\dfrac {c_3} {c_1} }^t \cdots$
where $ s + 2 t + 3 u + \cdots = n - 1$.


Proof

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Plugging:

$\ds x = \sum_{n \mathop = 1}^\infty C_n y^n$
into:

$\ds y = \sum_{n \mathop = 1}^\infty c_n x^n$
the following equation is obtained

$y = c_1 C_1 y + \paren {c_2 C_1^2 + c_1 C_2} y^2 + \paren {c_3 C_1^3 + 2 c_2 C_1 C_2 + c_1 C_3} y^3 + \paren {3 c_3 C_1^2 C_2 + c_2 C_2^2 + c_2 C_1 C_3} + \cdots$
Equating coefficients then gives the formula.


This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Reversion of Power Series: $20.52 - 59$
1953: P.M. Morse and H. Feshbach: Methods of Theoretical Physics, Part I




