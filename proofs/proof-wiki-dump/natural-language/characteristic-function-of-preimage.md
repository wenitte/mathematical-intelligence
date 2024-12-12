# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Preimage

Theorem
Let $X$ and $Y$ be sets.
Let $f : X \to Y$ be a function.
Let $A \subseteq Y$.

Then: 

$\chi_{f^{-1} \sqbrk A} = \chi_A \circ f$
where $\chi_{f^{-1} \sqbrk A}$ denotes the characteristic function of $f^{-1} \sqbrk A$.


Proof
We show that if $x \in f^{-1} \sqbrk A$, then: 

$\map {\paren {\chi_A \circ f} } x = 1$
and if $x \in X \setminus f^{-1} \sqbrk A$, then: 

$\map {\paren {\chi_A \circ f} } x = 0$

Let $x \in f^{-1} \sqbrk A$.
Then $\map f x \in A$, and so: 

$\map {\paren {\chi_A \circ f} } x = \map {\chi_A} {\map f x} = 1$
Now let $x \in X \setminus f^{-1} \sqbrk A$. 
Then $\map f x \in Y \setminus A$, and so: 

$\map {\paren {\chi_A \circ f} } x = \map {\chi_A} {\map f x} = 0$
$\blacksquare$





