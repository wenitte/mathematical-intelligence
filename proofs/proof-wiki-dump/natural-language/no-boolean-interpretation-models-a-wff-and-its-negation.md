# 

Source: https://proofwiki.org/wiki/No_Boolean_Interpretation_Models_a_WFF_and_its_Negation

Theorem
Let $v$ be a boolean interpretation.
Let $\mathbf A$ be a WFF of propositional logic.

Then $v$ can not model both $\mathbf A$ and $\neg \mathbf A$.


Proof
Suppose that $v$ models $\mathbf A$:

$v \models \mathbf A$

Then $v \left({\mathbf A}\right) = T$ by definition of models.
By definition of boolean interpretation, $v \left({\neg \mathbf A}\right) = F$.

In particular, $v (\neg \mathbf A) \ne T$, so that:

$v \not\models \neg \mathbf A$
Hence the result.
$\blacksquare$





