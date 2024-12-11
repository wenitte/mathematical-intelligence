# 

Source: https://proofwiki.org/wiki/101_is_Smallest_Number_whose_Period_of_Reciprocal_is_4


It has been suggested that this page be renamed.In particular: to reflect what this page actually saysTo discuss this page in more detail, feel free to use the talk page.
Theorem
$101$ is the first positive integer the decimal expansion of whose reciprocal has a period of $4$:

$\dfrac 1 {101} = 0 \cdotp \dot 009 \dot 9$
This sequence is A021105 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Let the positive integer reciprocal be $\dfrac1 k$ for some $k \in \Z_{\ge 0}$.
For it to have a period of recurrence of $4$ in base $10$, it must be able to be expressed as $\dfrac a {10^4-1}$ for some $a \in \Z_{\ge 0}$. 














\(\ds 10^4-1\)

\(=\)







\(\ds \paren { 10^2 - 1 } \paren { 10^2 + 1 }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 99 \cdot 101\)









Since this rational number must have a period of recurrence minimum of $4$, it cannot also have a period of $2$ or $1$. It will be sufficient for this proof to only consider periods of $2$. This rational number must not be able to be expressed as $\dfrac b {10^2-1}$ for any $b \in \Z_{\ge 0}$.














\(\ds \dfrac1 k\)

\(=\)







\(\ds \dfrac a {99 \cdot 101}\)














\(\ds \leadsto \ \ \)





\(\ds a k\)

\(=\)







\(\ds 99 \cdot 101\)










$\dfrac1 k \neq \dfrac b {10^2-1}$
$\leadsto \dfrac a {99 \cdot 101} \neq \dfrac b {99}$
$\leadsto a \neq 101 b$
Since $101$ is prime, $a$ is not a multiple of $101$ but $ak$ is, then $k$ must be a multiple of $101$. $k = 101$ is the first instance which satisfies these conditions and produces a reciprocal with a period of recurrence of 4.
$\blacksquare$





