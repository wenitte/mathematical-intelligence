# 

Source: https://proofwiki.org/wiki/Power_of_Product_with_Inverse



Theorem
Let $G$ be a group whose identity is $e$.
Let $a, b \in G: a b = b a^{-1}$.

Then:

$\forall n \in \Z: a^n b = b a^{-n}$


Proof
Proof by induction:

For all $n \in \Z$, let $\map P n$ be the proposition $a^n b = b a^{-n}$.
$\map P 0$ is trivially true, as $a^0 b = e b = b = b e = b a^{-0}$.


Basis for the Induction
$\map P 1$ is true, as this is the given relation between $a$ and $b$:

$a b = b a^{-1}$
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$a^k b = b a^{-k}$

Then we need to show:

$a^{k + 1} b = b a^{-\paren {k + 1} }$


Induction Step
This is our induction step:














\(\ds a^{k + 1} b\)

\(=\)







\(\ds a \paren {a^k b}\)




















\(\ds \)

\(=\)







\(\ds a \paren {b a^{-k} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {a b} a^{-k}\)




















\(\ds \)

\(=\)







\(\ds \paren {b a^{-1} } a^{-k}\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds b \paren {a^{-1} a^{-k} }\)




















\(\ds \)

\(=\)







\(\ds b a^{-\paren {k + 1} }\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore $\forall n \in \N: a^n b = b a^{-n}$.

Now we show that $\map P {-1}$ holds, that is, $a^{-1} b = b a$.














\(\ds a b\)

\(=\)







\(\ds b a^{-1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a b a\)

\(=\)







\(\ds b\)














\(\ds \leadstoandfrom \ \ \)





\(\ds b a\)

\(=\)







\(\ds a^{-1} b\)









thus showing that $\map P {-1}$ holds.

The proof that $\map P n$ holds for all $n \in \Z: n < 0$ then follows by induction, similarly to the proof for $n > 0$.
$\blacksquare$





