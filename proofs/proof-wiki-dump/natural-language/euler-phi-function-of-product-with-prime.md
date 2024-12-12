# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_of_Product_with_Prime

Theorem
Let $p$ be prime and $n \in \Z: n \ge 1$.
Then:

$\map \phi {p n} = \begin{cases} \paren {p - 1} \map \phi n & : p \nmid n \\ p \map \phi n & : p \divides n \end{cases}$
where:

$\map \phi n$ denotes the Euler $\phi$ function of $n$
$\divides$ denotes divisibility.

Thus for all $n \ge 1$ and for any prime $p$, we have that $\map \phi n$ divides $\map \phi {p n}$.


Proof
First suppose that $p \nmid n$.
Then by Prime not Divisor implies Coprime, $p \perp n$.
So by Euler Phi Function is Multiplicative, $\map \phi {p n} = \map \phi p \map \phi n$.
It follows from Euler Phi Function of Prime that $\map \phi {p n} = \paren {p - 1} \map \phi n$.

Now suppose that $p \divides n$.
Then $n = p^k m$ for some $k, m \in \Z: k, m \ge 1$ such that $p \perp m$.
Then:














\(\ds \map \phi {p n}\)

\(=\)







\(\ds \map \phi {p^{k + 1} m}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {p^{k + 1} } \map \phi m\)





Euler Phi Function is Multiplicative














\(\ds \)

\(=\)







\(\ds p^{k + 1} \paren {1 - \frac 1 p} \map \phi m\)





Euler Phi Function of Prime Power




At the same time:














\(\ds p \map \phi n\)

\(=\)







\(\ds p \map \phi {p^k m}\)




















\(\ds \)

\(=\)







\(\ds p \map \phi {p^k} \map \phi m\)





Euler Phi Function is Multiplicative














\(\ds \)

\(=\)







\(\ds p p^k \paren {1 - \frac 1 p} \map \phi m\)





Euler Phi Function of Prime Power














\(\ds \)

\(=\)







\(\ds p^{k + 1} \paren {1 - \frac 1 p} \map \phi m\)









$\blacksquare$





