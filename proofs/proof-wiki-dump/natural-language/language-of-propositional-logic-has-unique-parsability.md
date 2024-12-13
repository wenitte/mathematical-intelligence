# 

Source: https://proofwiki.org/wiki/Language_of_Propositional_Logic_has_Unique_Parsability



Theorem
The language of propositional logic $\LL_0$ has unique parsability.


Proof
It is to be demonstrated that each WFF arises by a unique rule of formation from the bottom-up specification of propositional logic.
The rules $\mathbf W : TF$ and $\mathbf W : \PP_0$ need no further treatment.

From inspection of the first character it is clear that the remaining $\mathbf W : \neg$ and $\mathbf W : Op$ cannot yield the same WFF.
What remains is to establish uniqueness in applying $\mathbf W : \neg$ and $\mathbf W : Op$.
For $\mathbf W : \neg$, this means to consider:

$\mathbf A = \neg \mathbf B = \neg \mathbf C$
from which it is immediate that $\mathbf B = \mathbf C$.

Lastly, for $\mathbf W : Op$, we have the following lemma:

Lemma
Let $\mathbf A$ be a WFF.
Suppose that $\mathbf A = \paren {\mathbf B \circ \mathbf C} = \paren {\mathbf D * \mathbf E}$.

Then $\mathbf B = \mathbf D$, ${\circ} = {*}$, and $\mathbf C = \mathbf E$.
$\Box$

Having examined all possible combinations of rules of formation, we conclude that $\LL_0$ has unique parsability.
$\blacksquare$


Also presented as
Some sources only prove a subset of this result, deeming the rest of the cases a triviality not worth devoting precious space to.





