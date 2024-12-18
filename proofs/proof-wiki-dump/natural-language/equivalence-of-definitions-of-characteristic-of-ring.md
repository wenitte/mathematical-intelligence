# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Characteristic_of_Ring



Theorem
Let $\struct {R, +, \circ}$ be a ring with unity whose zero is $0_R$ and whose unity is $1_R$.
The following definitions of the concept of Characteristic of Ring are equivalent:

Definition 1
For a natural number $n \in \N$, let $n \cdot x$ be defined as the power of $x$ in the context of the additive group $\struct {R, +}$:

$n \cdot x = \begin {cases}
0_R & : n = 0 \\
\paren {\paren {n - 1} \cdot x} + x & : n > 0
\end {cases}$

The characteristic $\Char R$ of $R$ is the smallest $n \in \N_{>0}$ such that $n \cdot 1_R = 0_R$.
If there is no such $n$, then $\Char R = 0$.

Definition 2
Let $g: \Z \to R$ be the initial homomorphism, with $\map g n = n \cdot 1_R$.
Let $\ideal p$ be the principal ideal of $\struct {\Z, +, \times}$ generated by $p$.

The characteristic $\Char R$ of $R$ is the positive integer $p \in \Z_{\ge 0}$ such that $\ideal p$ is the kernel of $g$.

Definition 3
The characteristic of $R$, denoted $\Char R$, is defined as follows.
Let $p$ be the order of $1_R$ in the additive group $\struct {R, +}$ of $\struct {R, +, \circ}$.
If $p \in \Z_{>0}$, then $\Char R := p$.
If $1_R$ is of infinite order, then $\Char R := 0$.


Proof
Definition 1 is equivalent to Definition 3
By definition of order, the order of $1_R$ is the smallest $p \in \Z_{> 0}$ such that $p \cdot 1_R = 0_R$, the identity of the additive group $\struct {R, +}$ of $\struct {R, +, \circ}$.
Hence if the order of $1_R$ is finite, the definitions coincide.

If the order of $1_R$ is infinite, there is no such $p$.
Then both definitions give $\Char R = 0$, so they coincide as well.
$\Box$


Definition 1 is equivalent to Definition 2
Let $g: \Z \to R$ be the initial homomorphism, with $\map g n = n \cdot 1_R$.
By Kernel of Ring Homomorphism is Ideal, $\ker g$ is an ideal of $R$.
By Ring of Integers is Principal Ideal Domain, there exists a unique $p \in \Z_{\ge 0}$ such that $\ker g$ is the principal ideal $\ideal p$.

Suppose there is a smallest $m$ such that $m \cdot 1_R = 0_R$.
Then for any $k \in \Z$:

$\map g {k m} = k m \cdot 1_R = k \cdot 0_R = 0_R$.
This gives $\ideal m \subseteq \ker g = \ideal p$.

Let $a \in \ker g$.
Then by the Division Theorem:

$\exists q, r \in \Z, 0 \le r < m: a = m q + r$
As $a, m \in \ker g = \ideal p$ so does $r = a - m q$.
Since $m$ is the smallest (strictly) positive integer such that $m \cdot 1_R = 0_R$:

$\forall n \in \Z: 0 < n < m \implies \map g n = n \cdot 1_R \ne 0_R$
This forces $r = 0$.
Thus $a = m q \in \ideal m$.
Hence we have $\ideal m = \ideal p$, giving $p = m$.

Now consider the case where $m$ does not exist.
Then for any $k \ne 0$:

$\map g k = k \cdot 1_R \ne 0_R$
And we have:

$\map g 0 = 0 \cdot 1_R = 0_R$
giving $\ker g = \set 0 = \ideal 0$.
Both definitions give $\Char R = 0$.
Therefore the definitions are equivalent in each case.
$\blacksquare$





