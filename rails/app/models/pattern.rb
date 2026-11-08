class Pattern < ApplicationRecord
    def steps
        body.lines.map(&:strip).reject(&:empty?)
    end
end
