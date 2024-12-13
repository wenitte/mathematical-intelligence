# 

Source: https://proofwiki.org/wiki/Length_of_Tangent_to_Excircle

Theorem
The excircle on one side of a triangle is tangent to that side and divides it into the same two lengths as the tangent to the incircle, but in opposite order.


It has been suggested that this page be renamed.In particular: because the existing name does not match what is being provedTo discuss this page in more detail, feel free to use the talk page.
Proof

Let the sides opposite vertex $A, B, C$ be $a,b,c$.
Let the semiperimeter of $\triangle ABC$ be $s$.
Construct the incircle of $\triangle ABC$ with center $M$.
Let $\triangle ABC$ be tangent to the incircle at $H$.
Construct the excircle of $\triangle ABC$ on side $c$ with center $N$.
Let $\triangle ABC$ be tangent to the excircle at $T$.

By Tangent Points of Incircle in Terms of Semiperimeter:

$AF = AH = s - a$
$CF = CG = s - c$
$BG = BH = s - b$
By addition:

$AB = AH + BH = \paren {s - a} + \paren {s - b}$
$AB = AT + BT = \paren {s - a} + \paren {s - b}$
By Tangents to Circle from Point are of Equal Length:

$AD = AT$
$BE = BT$
By addition:

$AT + BT = c$
Substituting:

$AD + BE = c$
Rearranging:

$BE = c - AD$

By Tangents to Circle from Point are of Equal Length, the tangents drawn to the excircle from $C$ are equal:

$AD + b = BE + a$
By addition:

$AD + b = c - AD + a$
$2AD = a + c - b$
$AD = \dfrac {a + c - b} 2$
By the definition of $s$ above:

$\paren {s - b} = \dfrac {a + c + b} 2 - b = \dfrac {a + c - b} 2$
Combining results:

$AD = s - b$
We find one pair of tangents to the incircle by substitution:

$AT = AD = s - b$

Since $c = \paren {s - a} + \paren {s - b} = AD + BE$:

$BE = s - a$
We find a second pair of tangents to the incircle by substitution:

$BT = BE = s - a$

The third pair of tangents $CD$ and $CE$ are

$CD = CE = 3 s - \paren {a + b + c} = s$
$\blacksquare$





