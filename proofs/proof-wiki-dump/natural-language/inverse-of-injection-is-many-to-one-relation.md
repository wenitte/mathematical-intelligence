# 

Source: https://proofwiki.org/wiki/Inverse_of_Injection_is_Many-to-One_Relation

Theorem
Let $f: S \to T$ be an injection.
Let $f^{-1}: T \to S$ be the inverse relation of $f$.

Then $f^{-1}$ is many-to-one.


Proof
Let $f: S \to T$ be an injection.
We have by definition of inverse relation that:

$f^{-1} = \set {\tuple {t, s}: t = \map f s}$

Let $f: S \to T$ be an injection.
Let $\tuple {t, s_1} \in f^{-1}$ and $\tuple {t, s_2} \in f^{-1}$.
By definition, we have that $\map f {s_1} = t = \map f {s_2}$.

But as $f$ is an injection:

$\map f {s_1} = \map f {s_2} \implies s_1 = s_2$
So we have that:

$\tuple {t, s_1} \in f^{-1} \land \tuple {t, s_2} \in f^{-1} \implies s_1 = s_2$
and so by definition, $f^{-1}$ is a many-to-one relation.
$\blacksquare$





